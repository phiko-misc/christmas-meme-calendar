#! /usr/bin/env node

import yargs from 'yargs/yargs';
import fs from 'fs';


/**
 * The main program
 */
function main() {

    /**
     * Command arguments
     */
    const argv = yargs(process.argv.slice(2)).options({
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


/**
 * Create the category folder
 * @param {string} title
 */
function createRootDir(title: string) {
    const dir = `src/images/${title}`;
    try {
        if (!fs.existsSync(dir)) {
            fs.mkdirSync(dir, { recursive: true });
        }
        console.error(`There are already a category with that name (${title})`);
    } catch (error) {
        console.error(error);
        process.exit(0);
    }
}

/**
 * Create the category folder
 * @param {string} title
 */
function createCategory(title: string) {
    const file = 'src/core/allowCategory.ts';
    try {
        fs.readFile(file, 'utf8', function (err, data) {
            const row = data.replace("export enum Category {", "").replace("\n}", "").replace("\n", "");
            const newData = `export enum Category {\n${row},\n    "${title}"\n}`
            if (data.includes(title)) {
                console.error("The category is already in the list");
                process.exit(0);
            }
            fs.writeFile(file, newData, function () {

                console.log(`Add category ${title} to allow category`);

            });

        });
    } catch (error) {
        console.error(error);
        process.exit(0);
    }
}


/**
 * Create weekdays and weekends folders
 * @param {string} title
 */
function createDaysFoldersAndWeeks(title: string) {
    const rootDir = `src/images/${title}`;
    try {
        let dir;

        /** Create weekdays folders */
        for (let index = 1; index <= 24; index++) {
            setTimeout(() => {
                dir = `${rootDir}/${index}`;
                if (!fs.existsSync(dir)) {
                    fs.mkdirSync(dir, { recursive: true });
                }
            }, 1);
        }

        /** Create weekends folders */
        for (let index = 1; index <= 5; index++) {
            setTimeout(() => {
                setTimeout(() => {
                    /** Create saturday folder */
                    dir = `${rootDir}/weekends/${index}/1`
                    if (!fs.existsSync(dir)) {
                        fs.mkdirSync(dir, { recursive: true });
                    }
                }, 1);
                /** Create sunday folder */
                dir = `${rootDir}/weekends/${index}/2`;
                if (!fs.existsSync(dir)) {
                    fs.mkdirSync(dir, { recursive: true });
                }
            }, 1);
        }

        console.info("Created all the folders for the category");
        console.info("Plss See https://github.com/phiko-misc/christmas-meme-calendar/wiki/Pictures-file-Structure");
        console.info("For understating the folder structure");
    } catch (error) {
        console.error(error);
        process.exit(0);
    }
}

/** Start the program */
main();
