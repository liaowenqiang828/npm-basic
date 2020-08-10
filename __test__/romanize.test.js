import {transform} from "../src/romanize";
import { iteratee } from "lodash";

describe('transform', () => {
    it('should return X when input 10', () => {
        const result = transform(10);

        expect(result).toEqual('X');
    });
});