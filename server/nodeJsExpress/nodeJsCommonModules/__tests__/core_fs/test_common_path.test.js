import { normalize_path } from '../../src/core_fs/common_path.js';
import assert from 'assert';

describe('normalize_path', () => {
    it('should normalize a given path', () => {
        const path = '/home/user/../user/docs';
        const result = normalize_path(path);
        assert.strictEqual(result, '/home/user/docs');
    });
});