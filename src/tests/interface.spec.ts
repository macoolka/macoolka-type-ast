import { parseInterface } from '../parse'
import * as ast from 'ts-morph'
import {writeFileSync} from 'fs'
import {format} from 'macoolka-prettier'
describe('typescript get tags', () => {
    it('empty', () => {
     //   const content=readFileSync(__dirname+'/fixtures/Basic.ts','utf-8')
        const path=__dirname+'/fixtures/Basic.ts';
        const project = new ast.Project()
        project.addExistingSourceFile(path)
        const sourceFile = project.getSourceFile(path)!
        const result=parseInterface(sourceFile!)
        writeFileSync(__dirname+'/Interface.ts',format({parser:'json-stringify',content:JSON.stringify(result)}),'utf-8')
       
    })
   
})