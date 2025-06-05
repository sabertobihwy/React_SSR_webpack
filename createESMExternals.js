// import fs from 'fs';
// import path from 'path';

const fs = require('fs')
const path = require('path')

module.exports =
    function createESMExternals(root = process.cwd()) {
        const nodeModulesPath = path.resolve(root, 'node_modules');
        const externals = {};

        if (!fs.existsSync(nodeModulesPath)) {
            throw new Error('node_modules not found.');
        }

        fs.readdirSync(nodeModulesPath).filter(d => !d.startsWith('.')).forEach((pkg) => {
            // 忽略 .bin
            if (pkg === '.bin') return;

            // 支持 scoped packages
            if (pkg.startsWith('@')) {
                const scopedPath = path.join(nodeModulesPath, pkg);
                fs.readdirSync(scopedPath).forEach((subPkg) => {
                    externals[`${pkg}/${subPkg}`] = `module ${pkg}/${subPkg}`;
                });
            } else {
                externals[pkg] = `module ${pkg}`;
            }
        });

        return externals;
    }

//console.log(createESMExternals())

