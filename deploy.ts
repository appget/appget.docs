import * as azure from 'azure-storage';
import * as dotenv from 'dotenv';
import * as glob from 'glob';
import * as _ from 'lodash';
import * as path from 'path';

dotenv.load();

const SOURCE = 'dist';
const CONTAINER = 'site';

const blob = azure.createBlobService();

function uploadFile(src: string, dest: string): Promise<azure.BlobService.BlobResult> {
    console.log(`Uploading ${src} => ${dest}`)
    return new Promise(function (resolve, reject) {
        blob.createBlockBlobFromLocalFile(CONTAINER, dest, src, (error, result, resp) => {
            if (error) return reject(error);
            process.stdout.write('  ' + resp.statusCode);
            return resolve(result);
        });
    });
}



async function run(files: string[]) {
    try {
        for (const file of _.reverse(files)) {
            await uploadFile(path.join(SOURCE, file),file);
        }
    } catch (error) {
        console.error(error);
    }
}


const files = glob.sync('**/*.*', { cwd: SOURCE });
const sortedFiles = _.sortBy(files, (f) => f.toString().split('/').length);


run(sortedFiles)
    .then(() => console.log('Done!'))
    .catch(console.error);

