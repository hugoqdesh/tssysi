#!/usr/bin/env node

import s from "systeminformation";

s.system(function (data) {
	console.log("\n- MOTHERBOARD -");
	console.log("|- Manufacturer: " + data.manufacturer);
	console.log("|- Model: " + data.model);
});

s.osInfo(function (data) {
	console.log("\n- OS -");
	console.log("| - Platform: " + data.platform);
	console.log("| - Distro: " + data.distro);
	console.log("| - Kernel: " + data.kernel);
	console.log("| - Hostname: " + data.hostname);
});

s.cpu(function (data) {
	console.log("\n- CPU -");
	console.log("|- Manufacturer: " + data.manufacturer);
	console.log("|- Brand: " + data.brand);
	console.log("|- Governor: " + data.governor);
	console.log("|- Cores: " + data.cores);
});

s.graphics(function (data) {
	console.log("\n- GPU -");
	console.log("| - Vendor: " + data.controllers[0].vendor);
	console.log("| - Model: " + data.controllers[0].model);
});

s.graphics(function (data) {
	console.log("\n- DISPLAY -");
	console.log("| - Model: " + data.displays[0].model);
	console.log("| - Connection: " + data.displays[0].connection);
	console.log("| - Refresh Rate: " + data.displays[0].currentRefreshRate);
});
