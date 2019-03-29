const BASE_DIR = process.env.BASE_DIR || '';
const withBaseDir = (link) => BASE_DIR + link;

export  {
    withBaseDir,
}
