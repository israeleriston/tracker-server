import create from './create-schema'
import find from './find-schema'
import update from './update-schema'
import del from './del-schema'

const schema = () => ({
	post: create,
	find: find,
	put: update,
	del: del
})
export default schema