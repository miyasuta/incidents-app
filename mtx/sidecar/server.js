const cds = require('@sap/cds');
cds.on('served', () => {
    const { 'cds.xt.SaasProvisioningService': provisioning } = cds.services

    if (provisioning) {
        let tenantProvisioning = require('./provisioning');
        provisioning.prepend(tenantProvisioning);
    } else {
        console.log("There is no saas provisioning service, therefore does not serve multitenancy!");
    }
});
module.exports = cds.server;