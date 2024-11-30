import { execSync } from 'child_process';
const _APP_INFO_ = {
    VERSION:"v1.0.6",
	// SHA 
	GIT_SHA:execSync('git rev-parse --short HEAD').toString().trim(),
	// 提交时间
	GIT_COMMIT_DATE:execSync('git log -1 --format=%cI').toString().trim(),
	//HASH
	GIT_HASH:execSync('git rev-parse HEAD').toString().trim(),
	//最后提交 message
	GIT_LAST_COMMIT_MESSAGE:execSync('git show -s --format=%s').toString().trim()
}

export default _APP_INFO_;