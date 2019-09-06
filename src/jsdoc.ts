import { parse, Annotation, Tag } from 'doctrine';
import { compareString, arrayCompare } from 'macoolka-compare'
import { Lens } from 'monocle-ts'
import * as A from 'fp-ts/lib/Array';
import { flow } from 'fp-ts/lib/function'
import { Option } from 'fp-ts/lib/Option'
import { pipe } from 'fp-ts/lib/pipeable'
import { array } from 'macoolka-collection'
export { Annotation }
const lensTitle = Lens.fromProp<Tag>()('title');

export const parseJSDoc = (source: string): Annotation => {
    return parse(source, { unwrap: true });
};

export const hasTag = (tag: string[]) => (annotation: Annotation): boolean =>

    arrayCompare().contains_every(annotation.tags.map(lensTitle.get))(tag)

export const getTag = (tag: string) => (annotation: Annotation): Option<Tag> =>
    pipe(
        annotation.tags,
        A.findFirst(flow(lensTitle.get, compareString.eq(tag)))
    )
export const tagToRecord = (a: Annotation) =>
    pipe(
        a.tags,
        array.toRecord('title')
    )

