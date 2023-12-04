#! /usr/bin/env node
import yargs from 'yargs/yargs';
import fs from 'fs';
function main() {
    var argv = yargs(process.argv.slice(2)).options({
        title: {
            type: 'string',
            demandOption: true,
            describe: 'The name on the category',
            alias: 't'
        },
    }).parseSync();
    createCategory(argv.title);
    createRootDir(argv.title);
    createDaysFoldersAndWeeks(argv.title);
}
function createRootDir(title) {
    var dir = "images/".concat(title);
    try {
        if (!fs.existsSync(dir)) {
            fs.mkdirSync(dir, { recursive: true });
        }
        console.error("There are already a category with that name (".concat(title, ")"));
    }
    catch (error) {
        console.error(error);
        process.exit(0);
    }
}
function createCategory(title) {
    var file = 'src/core/allowCategory.ts';
    try {
        fs.readFile(file, 'utf8', function (err, data) {
            var row = data.replace("export enum Category {", "").replace("\n}", "").replace("\n", "");
            var newData = "export enum Category {\n".concat(row, ",\n    \"").concat(title, "\"\n}");
            if (data.includes(title)) {
                console.error("The category is already in the list");
                process.exit(0);
            }
            fs.writeFile(file, newData, function () {
                console.log("Add category ".concat(title, " to allow category"));
            });
        });
    }
    catch (error) {
        console.error(error);
        process.exit(0);
    }
}
function createDaysFoldersAndWeeks(title) {
    var rootDir = "images/".concat(title);
    try {
        var dir_1;
        var _loop_1 = function (index) {
            setTimeout(function () {
                dir_1 = "".concat(rootDir, "/").concat(index);
                if (!fs.existsSync(dir_1)) {
                    fs.mkdirSync(dir_1, { recursive: true });
                }
            }, 1);
        };
        for (var index = 1; index <= 24; index++) {
            _loop_1(index);
        }
        var _loop_2 = function (index) {
            setTimeout(function () {
                setTimeout(function () {
                    dir_1 = "".concat(rootDir, "/weekends/").concat(index, "/1");
                    if (!fs.existsSync(dir_1)) {
                        fs.mkdirSync(dir_1, { recursive: true });
                    }
                }, 1);
                dir_1 = "".concat(rootDir, "/weekends/").concat(index, "/2");
                if (!fs.existsSync(dir_1)) {
                    fs.mkdirSync(dir_1, { recursive: true });
                }
            }, 1);
        };
        for (var index = 1; index <= 5; index++) {
            _loop_2(index);
        }
        console.info("Created all the folders for the category");
        console.info("Plss See https://github.com/phiko-misc/christmas-meme-calendar/wiki/Pictures-file-Structure");
        console.info("For understating the folder structure");
    }
    catch (error) {
        console.error(error);
        process.exit(0);
    }
}
main();
//# sourceMappingURL=index.js.map