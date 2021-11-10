/**
 * 任务队列，按时间间隔执行函数
 * 例: taskQueue(()=>{console.log(123)},1000)
 */
let queue = []
let timer = null

function process() {
	let fn = queue.shift()
	fn()
	if (queue.length === 0) {
		clearInterval(timer)
		timer = null
	}
}

export function taskQueue(fn, timeout/*仅第一个任务的timeout有效*/) {
	queue.push(fn)
	if (!timer) {
		process()
		timer = setInterval(process, timeout)
	}
}