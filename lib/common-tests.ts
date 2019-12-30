import { Selector } from 'testcafe';

let CommonTests = {
    "Ensure we don't have <pre> inside the page": async t => {
        const pre = Selector("pre").exists;

        await t
            .expect(pre).notOk;
    },
}

export = CommonTests;
