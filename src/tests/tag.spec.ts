import { getTags } from '../parse'
describe('typescript get tags', () => {
    it('empty', () => {
        expect(getTags([],true)).toEqual({
            deprecated: false,
            description: [],
            file: false,
            ignore: false,
            descriptions: {},
            examples: [],
            reason: [],
        })
    })
    it('empty', () => {
        const tag=`
 test
 1
 @ignore
 @example
 a
 b
 @desczh
 中文
 信息
 @file
 @reason
 reason
 info
 @deprecated
 @since 0.1.0        
        
`
        expect(getTags([tag],true)).toEqual({
            deprecated: true,
            description: ['test','1'],
            file: true,
            ignore: true,
            descriptions: {zh:['中文','信息']},
            examples: ['a','b'],
            reason: ['reason','info'],
            since:'0.1.0'
        })
    })
})