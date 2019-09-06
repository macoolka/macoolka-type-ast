/**
 * Parse ts code to type model
 * @desczh
 * 解析Typescript代码到type model
 * @file 
 */

import * as A from 'fp-ts/lib/Array'
import * as O from 'fp-ts/lib/Option'
import { contramap, Ord, ordString } from 'fp-ts/lib/Ord'
import * as path from 'path'
import { pipe } from 'fp-ts/lib/pipeable'
import * as E from 'fp-ts/lib/Either'
import * as ast from 'ts-morph'
import { parseJSDoc, tagToRecord } from './jsdoc'
import { get } from 'macoolka-object'
import { notEmpty } from 'macoolka-predicate'
import { array } from 'macoolka-collection'
import {
    MMethod, MClass, MTypeAlias, MInterface, MModule, MConstant, MStaticMethod,
    MExport, MFunction, MDocumentable, MField, MValueable, MFunctional
} from 'macoolka-type-model/lib/models/InputModule'
import { InputModule as Mi, io, Module } from 'macoolka-type-model'
import { omit } from 'macoolka-object'
import { MonidI18N, I18NValidation } from 'macoolka-i18n'
import { FileWhereUniqueInput, showFile } from 'macoolka-store-core'
import { } from 'macoolka-app/lib/'

const Tags = {
    since: "since",
    file: "file",
    description: "description",
    examples: 'example',
    deprecated: 'deprecated',
    reason: 'reason',
    ignore: 'ignore',
    descriptions: 'descriptions'
}
export type JSDoc = Array<string>
/**
 * get comment info
 * 
 * @since 0.2.0
 */
export function getTags(jsdocs: Array<string>, isModule: boolean = false): MDocumentable {
    const jsdoc = pipe(
        jsdocs.join('\n'),
        parseJSDoc,
    )
    const descriptions = pipe(
        jsdoc.tags,
        array.filter(a => a.title.startsWith('desc')),
        array.map(a => ({
            title: a.title.substring(4),
            desc: a.description
                ? a.description.split('\n')
                : []
        })),
        array.reduce({} as Record<string, any>, (b, a) => ({ ...b, [a.title]: a.desc }))

    )
    const description = pipe(
        get(jsdoc, ['description']),
        O.fromPredicate(notEmpty),
        O.map((a: string) => a.replace(/\\@/gi, '@')),
        O.map(a => a.split('\n')),
        O.getOrElse(() => [] as string[])
    )
    return pipe(
        jsdoc,
        tagToRecord,
        tag => ({
            since: pipe(
                get(tag, [Tags.since, 'description']),
                O.fromPredicate(notEmpty),
                O.toUndefined
            ),
            description,
            examples: pipe(
                get(tag, [Tags.examples, 'description']),
                O.fromPredicate(notEmpty),
                O.map(a => a.split('\n')),
                O.getOrElse(() => [] as string[])
            ),
            file: pipe(
                get(tag, [Tags.file]),
                a => a ? true : false

            ),
            deprecated: pipe(
                get(tag, [Tags.deprecated]),
                a => a ? true : false

            ),
            ignore: pipe(
                get(tag, [Tags.ignore]),
                a => a ? true : false

            ),

            reason: pipe(
                get(tag, [Tags.reason, 'description']),
                O.fromPredicate(notEmpty),
                O.map(a => a.split('\n')),
                O.getOrElse(() => [] as string[])
            ),
            descriptions,

        }),
        a => isModule ? a : omit(a, 'file')
    )
}

const getTypeText = (a: ast.Type) => stripImportTypes(a.getText().trim())
export const getType = (a: ast.Type, isArray: boolean = false): MValueable => {

    const value = getTypeText(a)
    if (a.isBoolean()) {
        return {
            type: {
                _kind: 'boolean',
                isArray,
            }
        }

    } else if (a.isString()) {
        return {
            type: {
                _kind: 'string',
                isArray,
            }
        }
    } else if (a.isNumber()) {
        return {
            type: {
                _kind: 'number',
                isArray,
            }
        }
    } else if (a.isStringLiteral()) {
        return {
            type: {
                _kind: 'kind',
                value,
                isArray,
            }
        }
    } else if (a.isNumberLiteral()) {
        return {
            type: {
                _kind: 'kind',
                value,
                isArray,
            }
        }
    } else if (a.isBooleanLiteral()) {
        return {
            type: {
                _kind: 'kind',
                value,
                isArray,
            }
        }
    }
    else if (a.isArray()) {

        const type = a.getArrayElementType()
        const type1: MValueable = type ? getType(type) : { type: { _kind: 'type', value: 'null' } };
        return type1;

    }
    else if (a.isClass()) {

        return {
            type: {
                _kind: 'type',
                value,
                isArray,
            }
        }
    } else if (a.isInterface()) {
        return {
            type: {
                _kind: 'type',
                value,
                isArray,
            }
        }
    } else if (a.isIntersection()) {
        const values: string[] = [];
        for (const g of a.getIntersectionTypes()) {
            values.push(getTypeText(g))
        }
        return {
            type: {
                _kind: 'typeUnion',
                values,
                isArray,
            }
        }

    } else if (a.isTuple()) {
        const values: string[] = [];
        for (const g of a.getIntersectionTypes()) {
            values.push(getTypeText(g))
        }
        return {
            type: {
                _kind: 'typeUnion',
                values,
                isArray,
            }
        }
    } else if (a.isUndefined()) {

        return {
            type: {
                _kind: 'type',
                value: 'undefined',
                isArray,
            }
        }
    } else if (a.isNull()) {
        return {
            type: {
                _kind: 'type',
                value: 'null',
                isArray,
            }
        }
    }
    else if (a.isUnion()) {

        const values: string[] = [];

        const literals: string[] = [];
        for (const g of a.getUnionTypes()) {
            if (g.isLiteral()) {
                literals.push(getTypeText(g))
            } else {
                values.push(getTypeText(g))
            }

        }
        if (values.length > 0) {
            return {
                type: {
                    _kind: 'typeUnion',
                    values,
                    isArray,
                }
            }
        }
        if (literals.length > 0) {
            return {
                type: {
                    _kind: 'enum',
                    values: literals,
                    isArray,
                }
            }
        }
        return {
            type: {
                _kind: 'typeUnion',
                values,
                isArray,
            }
        }
    } else if (a.isObject()) {
        return {
            type: {
                _kind: 'type',
                value: 'object',
                isArray,
            }
        }
    } else {
        return {
            type: {
                _kind: 'type',
                value,
                isArray,
            }
        };
    }

};
function getInteterfaceDeclarationSignature(id: ast.InterfaceDeclaration): string {
    return id.getText();
}

function parseInterfaceDeclaration(id: ast.InterfaceDeclaration): MInterface {
    id.getProperties
    const interf: MInterface = {
        name: id.getName(),
        isExported: id.isExported(),
        signature: getInteterfaceDeclarationSignature(id),
        implements: id.getBaseDeclarations().map(a => a.getName() ? a.getName()! : 'NoName'),
        ...getintefaceChildren(id),
        ...pipe(
            id.getJsDocs().map(a => a.getText()),
            getTags,
        ),
    }
    return interf

}

export function getintefaceChildren(interD: ast.InterfaceDeclaration) {
    const methods = pipe(
        interD.getMethods(),
        array.map(parseMethod)
    )


    const { left, right } = pipe(
        interD.getProperties(),
        array.partition(vd => {
            // vd.getType().isAnonymous
            const initializer = vd.getInitializer()
            return (initializer && ast.TypeGuards.isFunctionLikeDeclaration(initializer)) ? true : false
        }),
        ({ left, right }) => ({
            left: left.map(parseProperty),
            right: right.map(parseMethodProperty)
        })
    )
    const A = {

        methods: pipe(
            methods.concat(right),
            array.sort<MMethod>(byName),
        ),
        fields: pipe(
            left,
            array.sort<MField>(byName),
        )

    }
    return A

}
const parseProperty = (a: ast.PropertySignature): MField => {
    const type = getType(a.getType());
    a.hasQuestionToken
    const field: MField = {
        name: a.getName(),
        signature: a.getText(),
        required: !a.hasQuestionToken(),
        ...type,
        ...pipe(
            a.getJsDocs().map(a => a.getText()),
            getTags,
        )
    }
    return field;
};
function parseMethodProperty(a: ast.PropertySignature): MFunctional {

    const type = getType(a.getType());
    a.hasQuestionToken
    const func: MFunctional = {
        name: a.getName(),
        signature: a.getText(),
        required: !a.hasQuestionToken(),
        ...type,
        ...pipe(
            a.getJsDocs().map(a => a.getText()),
            getTags,
        )
    }
    return func;
}
const parseMethod = (a: ast.MethodSignature): MMethod => {
    const type = getType(a.getType());
    a.hasQuestionToken
    const field: MMethod = {
        name: a.getName(),
        signature: a.getText(),
        required: !a.hasQuestionToken(),
        ...type,
        ...pipe(
            a.getJsDocs().map(a => a.getText()),
            getTags,
        )
    }
    return field;
};
const byName = pipe(
    ordString,
    contramap((x: { name: string }) => x.name)
)
/**
 * @since 0.2.0
 */
export function parseInterface(sourceFile: ast.SourceFile): Array<MInterface> {
    return pipe(
        sourceFile.getInterfaces(),
        array.map(parseInterfaceDeclaration),
        array.sort<MInterface>(byName),
    )

}
function getFunctionDeclarationSignature(f: ast.FunctionDeclaration): string {
    const text = f.getText()

    return pipe(
        f.compilerNode.body,
        O.fromNullable,
        O.map(body => {
            const end = body.getStart() - f.getStart() - 1
            return text.substring(0, end) + ' { ... }'
        }),
        O.getOrElse(() => text + ' { ... }')
    )
}
function getFunctionDeclarationAnnotation(fd: ast.FunctionDeclaration): string[] {
    const overloads = fd.getOverloads()
    const docs = overloads.length === 0 ? fd.getJsDocs() : (overloads[0].getJsDocs())

    return docs.map(a => a.getText())
}

function parseFunctionDeclaration(fd: ast.FunctionDeclaration): MFunction {
    const overloads = fd.getOverloads()
    const signatures =
        overloads.length === 0
            ? [getFunctionDeclarationSignature(fd)]
            : [
                ...overloads.slice(0, overloads.length - 1).map(fd => fd.getText()),
                getFunctionDeclarationSignature(overloads[overloads.length - 1])
            ]
    const func = {
        name: fd.getName() ? fd.getName() : 'noName',
        signatures,
        isExported: fd.isExported(),
        ...pipe(
            getFunctionDeclarationAnnotation(fd),
            getTags,
        )
    } as MFunction;
    return func
}


const indexOf = (big: string, small: string) => {
    const i = big.indexOf(small)
    return i !== -1 ? O.some(i) : O.none
}

const lastIndexOf = (big: string, small: string) => {
    const i = big.lastIndexOf(small)
    return i !== -1 ? O.some(i) : O.none
}

function getFunctionVariableDeclarationSignature(vd: ast.VariableDeclaration): string {
    const text = vd.getText()
    const end = pipe(
        indexOf(text, ' => {'),
        O.alt(() => lastIndexOf(text, ' =>'))
    )
    return `export const ${text.substring(
        0,
        pipe(
            end,
            O.getOrElse(() => text.length)
        )
    )} => ...`
}
function parseFunctionVariableDeclaration(vd: ast.VariableDeclaration): MFunction {

    const vs1: any = vd.getParent();
    const vs: any = vs1.getParent();

    const func: MFunction = {
        name: vd.getName(),
        signature: getFunctionVariableDeclarationSignature(vd),
        isExported: vd.isExported(),
        ...pipe(
            vs.getJsDocs().map((a: any) => a.getText()),
            getTags,
        )

    }
    return func
}
// fd.isExported() && !isInternal(getFunctionDeclarationAnnotation(fd))


function parseTypeAliasDeclaration(ta: ast.TypeAliasDeclaration): MTypeAlias {
    const typeAlias: MTypeAlias = {
        name: ta.getName(),
        signature: ta.getText(),
        ...pipe(
            ta.getJsDocs().map(a => a.getText()),
            getTags,
        )
    }
    return typeAlias

}

/**
 * @since 0.2.0
 */
function getTypeAliases(sourceFile: ast.SourceFile): Array<MTypeAlias> {
    return pipe(
        sourceFile.getTypeAliases(),
        array.map(parseTypeAliasDeclaration),
        array.sort<MTypeAlias>(byName),
    )

}



function getConstantVariableDeclarationSignature(vd: ast.VariableDeclaration): string {

    const text = vd.getText()
    const end = text.indexOf(' = ')
    let name = text.substring(0, end)
    if (name.indexOf(':') === -1) {
        if (vd.getType && vd.getType().getText)

            name += ': ' + stripImportTypes(vd.getType().getText(vd))
        else
            name = 'empty'
    }
    return `export const ${name} = ...`

}

function parseConstantVariableDeclaration(vd: ast.VariableDeclaration): MConstant {
    const vs1: any = vd.getParent();
    const vs: any = vs1.getParent();
    const constant: MConstant = {
        name: vd.getName(),
        signature: getConstantVariableDeclarationSignature(vd),
        isExported: vd.isExported(),
        ...pipe(
            vs.getJsDocs().map((a: any) => a.getText()),
            getTags,
        )
    }
    return constant
}

/**
 * @since 0.2.0
 */
function getExport(sourceFile: ast.SourceFile) {
    const methods = pipe(
        sourceFile.getFunctions(),
        array.map(parseFunctionDeclaration),
    )

    const { left, right } = pipe(
        sourceFile.getVariableDeclarations(),
        array.filter(a => a.isExported()),

        array.partition(vd => {
            const initializer = vd.getInitializer()
            return (initializer && ast.TypeGuards.isFunctionLikeDeclaration(initializer)) ? true : false
        }),
        ({ left, right }) => ({
            left: left.map(parseConstantVariableDeclaration),
            right: right.map(parseFunctionVariableDeclaration)
        })
    )
    const A = {

        functions: pipe(
            methods.concat(right),
            array.sort<MFunction>(byName),
        ),
        constants: pipe(
            left,
            array.sort<MConstant>(byName),
        )

    }
    return A

}
/**
 * @internal
 */
function stripImportTypes(s: string): string {
    return s.replace(/import\("((?!").)*"\)./g, '')
}
function parseExportSpecifier(es: ast.ExportSpecifier): MExport {
    const signature = stripImportTypes(es.getType().getText(es))
    const exp: MExport = {
        name: es.compilerNode.name.text,
        signature,

    }
    return pipe(
        A.head(es.getLeadingCommentRanges()),
        O.map(vs => ({
            ...exp,
            ...pipe(
                [vs.getText()],
                getTags,
            )
        })
        ),
        O.getOrElse(() => exp)
    )

}

function parseExportDeclaration(ed: ast.ExportDeclaration): Array<MExport> {

    return pipe(
        ed.getNamedExports(),
        array.map(parseExportSpecifier))

}

/**
 * @since 0.2.0
 */
function getExports(sourceFile: ast.SourceFile): Array<MExport> {
    return pipe(
        sourceFile.getExportDeclarations(),
        array.map(parseExportDeclaration),
        array.flatten,
        array.sort<MExport>(byName),
    )

}

function getTypeParameters(typeParameters: Array<ast.TypeParameterDeclaration>): string {
    return typeParameters.length === 0 ? '' : '<' + typeParameters.map(p => p.getName()).join(', ') + '>'
}

function getConstructorDeclarationSignature(c: ast.ConstructorDeclaration): string {
    const text = c.getText()
    const body = c.compilerNode.body
    if (body === undefined) {
        return text + ' { ... }'
    }
    const end = body.getStart() - c.getStart() - 1
    return text.substring(0, end) + ' { ... }'
}

function getClassDeclarationSignature(c: ast.ClassDeclaration): string {
    const dataName = c.getName()
    const typeParameters = getTypeParameters(c.getTypeParameters())
    const constructors = c.getConstructors()
    if (constructors.length > 0) {
        const constructorSignature = getConstructorDeclarationSignature(constructors[0])
        return `export class ${dataName}${typeParameters} {\n  ${constructorSignature}\n  ... \n}`
    } else {
        return `export class ${dataName}${typeParameters} { ... }`
    }
}

function getMethodSignature(md: ast.MethodDeclaration): string {
    const text = md.getText()
    const body = md.compilerNode.body
    if (body === undefined) {
        return text + ' { ... }'
    }
    const end = body.getStart() - md.getStart() - 1
    return text.substring(0, end) + ' { ... }'
}

function parseMethodDeclaration(md: ast.MethodDeclaration): MFunctional {
    const overloads = md.getOverloads()
    const annotation = overloads.length === 0 ? md.getJsDocs() : overloads[0].getJsDocs()
    const signatures =
        overloads.length === 0
            ? [getMethodSignature(md)]
            : [
                ...overloads.slice(0, overloads.length - 1).map(md => md.getText()),
                getMethodSignature(overloads[overloads.length - 1])
            ]
    const method: MFunctional = {
        name: md.getName(),
        signature: signatures.join('\n'),
        ...pipe(
            annotation.map(a => a.getText()),
            getTags,
        )

    }
    return method

}
function parsePropertyDeclaration(md: ast.PropertyDeclaration): Mi.MFunctional {

    const annotation = md.getJsDocs()
    const signatures = md.getText()

    const method: MMethod = {
        name: md.getName(),
        signature: signatures,
        ...pipe(
            annotation.map(a => a.getText()),
            getTags,
        )

    }
    return method

}

function parseClass(c: ast.ClassDeclaration): MClass {
    const name = c.getName()
    c.getProperties
    const cls: MClass = {
        name: name ? name : 'noName',
        signature: getClassDeclarationSignature(c),
        fields: pipe(
            c.getProperties(),
            array.map(parsePropertyDeclaration)
        ),
        methods: pipe(
            c.getInstanceMethods(),
            array.map(parseMethodDeclaration),
            array.sort<MMethod>(byName),
        ),
        staticMethods: pipe(
            c.getStaticMethods(),
            array.map(parseMethodDeclaration),
            array.sort<MStaticMethod>(byName),
        ),
        ...pipe(
            c.getJsDocs().map(a => a.getText()),
            getTags,
        )
    }
    return cls

}

/**
 * @since 0.2.0
 */
export function getClasses(sourceFile: ast.SourceFile): Array<MClass> {
    return pipe(
        sourceFile.getClasses(),
        array.map(parseClass),
        array.sort<MClass>(byName),
    )

}

/**
 * @since 0.2.0
 */
export function getModuleInfo(sourceFile: ast.SourceFile): string[] | undefined {

    const x = sourceFile.getStatements()
    if (x.length > 0) {
        const comments = x[0].getLeadingCommentRanges()
        if (comments.length > 0) {

            return [comments[0].getText()]
        }
    }
    return undefined
}
const ordModule: Ord<MModule> = pipe(
    ordString,
    contramap((module: MModule) => (module.path ? module.path : []).join('/').toLowerCase())
)

function getModuleName(p: Array<string>): string {
    return path.parse(p[p.length - 1]).name
}
function _parse(path: Array<string>, sourceFile: ast.SourceFile): MModule {
    const schema: MModule = {
        path,
        name: getModuleName(path),
        interfaces: parseInterface(sourceFile),
        typealiases: getTypeAliases(sourceFile),
        classes: getClasses(sourceFile),
        exports: getExports(sourceFile),
        ...getExport(sourceFile),
        ...pipe(
            getModuleInfo(sourceFile),
            a => a ? getTags(a, true) : {}

        )
    }
    return schema
}
/**
 * Parse Module from some typescript file path
 * @desczh
 * 解析typescript文件到‘typeModule’
 * @since 0.2.0
 */
export function parse(files: Array<FileWhereUniqueInput>): E.Either<MonidI18N, Module.MModule[]> {
    const paths = files.map(showFile.show)
    const project = new ast.Project()
    paths.forEach(path => {
        project.addExistingSourceFile(path)
    })
    return pipe(
        paths,
        array.map(file => {
            const sourceFile = project.getSourceFile(file)!
            return _parse(file.split(path.sep), sourceFile)
        }),
        array.sort(ordModule),
        array.map(a => pipe(
            a,

            io.NoValidNameModule.decode,
            io.mapI18N,
        )),
        A.array.sequence(I18NValidation)
    )
}

export default parse