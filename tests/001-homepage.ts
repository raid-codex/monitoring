import { Selector } from 'testcafe';
import CommonTests = require('../lib/common-tests');

fixture("Homepage").page("https://raid-codex.com");

for (let key in CommonTests) {
    let fn = CommonTests[key];

    test(key, fn);
}
