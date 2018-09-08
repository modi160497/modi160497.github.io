import { Stitch, AnonymousCredential } from 'mongodb-stitch-browser-sdk'

function initializeAndLogin() {
	
Stitch.initializeDefaultAppClient('onlinepantry-kyccp');
const stitchClient = Stitch.defaultAppClient;

 console.log("logging in anonymously");
client.auth.loginWithCredential(new AnonymousCredential()).then(user => {
  console.log(`logged in anonymously as user ${user.id}`)
});
}
