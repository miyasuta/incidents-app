const cds = require('@sap/cds');
const xsenv = require('@sap/xsenv');
module.exports = (service) => {
    service.on('dependencies', async (req, next) => {
        let dependencies = await next();
        const services = xsenv.getServices({
            html5Host: { tag: 'html5appsrepo' }
        });
        console.log(services);
        dependencies.push({ xsappname: services.html5Host.uaa.xsappname });
        console.log("SaaS Dependencies:", JSON.stringify(dependencies));
        return dependencies;
    });
}