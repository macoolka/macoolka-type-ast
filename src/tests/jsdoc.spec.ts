import {parseJSDoc,hasTag,getTag,tagToRecord} from '../jsdoc';
import * as O from 'fp-ts/lib/Option'
const a=`
 The property specifies the alignment for the selected item inside the flexible container.
 The property overrides the default alignment set by the container's align property.
`
const b=`
The property specifies the alignment for the selected item inside the flexible container.
The property overrides the default alignment set by the container's align property.
@typeclass
@data
`
const c=`
The property specifies the alignment for the selected item inside the flexible container.
The property overrides the default alignment set by the container's align property.
@typeclass
`
const d=`
The property specifies the alignment for the selected item inside the flexible container.
The property overrides the default alignment set by the container's align property.
@typeclass
@exmaple
abc
@since 0.1.1
@ZH
a

c
`
const pa=parseJSDoc(a);
const pb=parseJSDoc(b);
const pc=parseJSDoc(c);
const pd=parseJSDoc(d);
describe('jsdoc',()=>{
    it('parseJSDoc',()=>{
        expect(pa).toMatchSnapshot();
        expect(pb).toMatchSnapshot();
    })
    it('hasTag',()=>{
        expect(hasTag(['typeclass'])(pb)).toBeTruthy();
        expect(hasTag(['data'])(pb)).toBeTruthy();
        expect(hasTag(['data','typeclass'])(pb)).toBeTruthy();
        expect(hasTag(['typeclass'])(pc)).toBeTruthy();
        expect(hasTag(['data'])(pc)).toBeFalsy();
        expect(hasTag(['data','typeclass'])(pc)).toBeFalsy();
        expect(hasTag(['dta'])(pb)).toBeFalsy();
        expect(hasTag(['data'])(pa)).toBeFalsy();
    })  
    it('getTag',()=>{
        expect(O.isSome(getTag('typeclass')(pb))).toBeTruthy();
    }) 
    it('tagToRecord',()=>{
       
        expect(tagToRecord(pd)).toMatchSnapshot();
    })
})