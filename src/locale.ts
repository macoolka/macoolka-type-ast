/**
 * Locale a Module
 * @desczh
 * 对一个模块进行本地化
 * @file 
 */
import * as O from 'fp-ts/lib/Option'
import { pipe } from 'fp-ts/lib/pipeable'
import { get, omit } from 'macoolka-object'
import { array } from 'macoolka-collection'
import { Module as Mo } from 'macoolka-type-model'
import { MonidI18N } from 'macoolka-i18n'
const getLocaleDocumentable = <A extends Mo.MDocumentable>(a: A): MonidI18N<A> =>
    i18nM => ({
        ...omit(a, ['descriptions']) as A,
        description: i18nM && i18nM.i18n && i18nM.i18n.locale
            ? pipe(
                get(a.descriptions, i18nM.i18n.locale),
                O.fromNullable,
                O.getOrElse(() => a.description)
            )
            : a.description,
    })
function printInterfaceItem(a: Mo.MField | Mo.MMethod) {
    const content = '\n  ' + a.signature ? a.signature : '';
    if (a.description.length > 0) {
        let desc = '  /**\n'
        desc += a.description.map(a => `   *${a}`).join('\n')
        desc += '\n   */\n'
        return desc + content;
    }
    return content
}
function buildInterface(a: Mo.MInterface) {
    let content = `\ninterface ${a.name} ${a.implements.length > 0
        ? `extends ${a.implements.join(',')}`
        : ''}{\n`;

    content += a.fields.map(printInterfaceItem).join('\n')
    content += a.methods.map(printInterfaceItem).join('\n')
    content += '\n}\n'
    return content;
}
export const localeInterface =
    (a: Mo.MInterface): MonidI18N<Mo.MInterface> => i18nM => {
        const _result: Mo.MInterface = {
            ...getLocaleDocumentable(a)(i18nM),

            fields: pipe(
                a.fields,
                array.map(value => getLocaleDocumentable(value)(i18nM))
            ),
            methods: pipe(
                a.methods,
                array.map(value => getLocaleDocumentable(value)(i18nM))
            ),
        }
        const result = {
            ..._result,
            signature: buildInterface(getLocaleDocumentable(_result)(i18nM)),
        }
        return result
    }
const localeTypeAlias =
    (a: Mo.MTypeAlias): MonidI18N<Mo.MTypeAlias> => i18nM => {
        const result: Mo.MTypeAlias = {
            ...getLocaleDocumentable(a)(i18nM),

            fields: pipe(
                a.fields,
                array.map(value => getLocaleDocumentable(value)(i18nM))
            ),
            methods: pipe(
                a.methods,
                array.map(value => getLocaleDocumentable(value)(i18nM))
            ),
        }
        return result
    }
const localeClass = (a: Mo.MClass): MonidI18N<Mo.MClass> => i18nM => {
    const result: Mo.MClass = {
        ...getLocaleDocumentable(a)(i18nM),
        fields: pipe(
            a.fields,
            array.map(value => getLocaleDocumentable(value)(i18nM))
        ),
        methods: pipe(
            a.methods,
            array.map(value => getLocaleDocumentable(value)(i18nM))
        ),
        staticMethods: pipe(
            a.staticMethods,
            array.map(value => getLocaleDocumentable(value)(i18nM))
        ),
    }
    return result
}
/**
 * Locale a Module.
 * Replace desc'locale' to description
 * @desczh
 * 本地化一个模块
 * 用desc'locale'替换description
 * @since 0.2.0
 */
export const localeModule = (a: Mo.MModule): MonidI18N<Mo.MModule> => i18nM => {
    const result: Mo.MModule = {
        ...getLocaleDocumentable(a)(i18nM),
        constants: pipe(
            a.constants,
            array.map(value => getLocaleDocumentable(value)(i18nM))
        ),
        functions: pipe(
            a.functions,
            array.map(value => getLocaleDocumentable(value)(i18nM))
        ),
        classes: pipe(
            a.classes,
            array.map(value => localeClass(value)(i18nM))
        ),
        interfaces: pipe(
            a.interfaces,
            array.map(value => localeInterface(value)(i18nM))
        ),
        typealiases: pipe(
            a.typealiases,
            array.map(value => localeTypeAlias(value)(i18nM))
        ),
        exports: pipe(
            a.exports,
            array.map(value => getLocaleDocumentable(value)(i18nM))
        ),
    }
    return result
}
export default localeModule