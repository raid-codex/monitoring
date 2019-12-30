import { Selector } from 'testcafe';
import CommonTests = require('../lib/common-tests');

fixture("Champions list").page("https://raid-codex.com/champions/");

for (let key in CommonTests) {
    let fn = CommonTests[key];

    test(key, fn);
}

test("Champions have loaded", async t => {
    const championCard = Selector(".ng-champion-list .champion-single").exists;
    await t
        .expect(championCard).ok
});

test("Champions have their thumbnail as image", async t => {
    const championImage = Selector(".ng-champion-list .champion-single img.champion-img");
    await t
        .expect(championImage.getAttribute("src")).contains("/img/hashed-img");
});