/**
 * Parse file to Model Module
 * @file 
 */
import locale from './locale'
import parseModule from './parse'
import { pipe } from 'fp-ts/lib/pipeable'
import * as E from 'fp-ts/lib/Either'
import { Module } from 'macoolka-type-model'
import { MonidI18N,MonidI18NParam } from 'macoolka-i18n'
import { FileWhereUniqueInput } from 'macoolka-store-core'
/**
 * parse file to locale module
 * @desczh
 * 解析ts文件到`Module` 
 */
export function parse(files: Array<FileWhereUniqueInput>): E.Either<MonidI18N<string>, MonidI18N<Module.MModule[]>> {
    const data = parseModule(files);
    return pipe(
        data,
        E.map(as => (i18nM: MonidI18NParam) => {
            return as.map(a => locale(a)(i18nM))
        }),
    )
}
/**
 * parse file to locale module
 * @desczh
 * 解析ts文件到`Module`(i18n)
 */
export const parseI18N = (files: Array<FileWhereUniqueInput>)=>(i18n: MonidI18NParam) : E.Either<string, Module.MModule[]> => {
    const data = parse(files);
    return pipe(
        data,
        E.map(as => as(i18n)),
        E.mapLeft(as => as(i18n))
    )
}
