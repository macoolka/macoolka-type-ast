import { parseI18N } from '../'
import { writeFileSync } from 'fs'
import * as E from 'fp-ts/lib/Either'
import { pipe } from 'fp-ts/lib/pipeable'
import { format } from 'macoolka-prettier'
import * as path from 'path'
describe('module', () => {
    const container = path.join(__dirname, 'fixtures')
    it('basic', () => {
        pipe(
            parseI18N([{ container, folders: [], name: 'Basic.ts' }])({}),
            E.mapLeft(a=>{
                console.log(a)
                return a;
            }),
            E.map(a => {
                expect(a.length).toEqual(1)
                expect(a[0].path!.length > 0).toEqual(true)
                writeFileSync(__dirname+'/index.ts',format({parser:'json-stringify',content:JSON.stringify(a)}),'utf-8')
            }),
            E.mapLeft(a => {
                return a
            }),
            a => expect(E.isRight(a)).toEqual(true),
        )
    })
     it('locale', () => {
        const parseLocale = parseI18N([{ container, folders: [], name: 'Locale.ts' }])
        pipe(
            parseLocale({}),
            E.mapLeft(a=>{
                console.log(a)
                return a;
            }),
            a => {
                
                expect(E.isRight(a)).toEqual(true)
                return a
            },
            E.map(a => {
                writeFileSync(__dirname + '/locale.en.json', format({parser:'json-stringify',content:JSON.stringify(a)}), 'utf-8')
                expect(a).toMatchSnapshot()
                
            }),

        )
        pipe(
            parseLocale({ i18n: { locale: 'zh' } }),
            a => {
                expect(E.isRight(a)).toEqual(true)
                return a
            },
            E.map(a => {
                writeFileSync(__dirname + '/locale.zh.json', format({parser:'json-stringify',content:JSON.stringify(a)}), 'utf-8')
                expect(a).toMatchSnapshot()
                
            }),

        )

    }) 

})