# The @ symbol in a Makefile suppresses the command itself from being printed to the terminal before execution.
# Only the output of the command (e.g., logs or errors) will be displayed.
test:
	@echo "Running tests..."
	@npm test

# http server
# to run this using make goal or npm start 
# we can also just call `node src/core_http/server.js` to run the server
core-http-server:
	@echo "Starting server in 8080 ..."
	npm start

core-url: 
	@echo "Running URL example ..."
	node src/core_http/url.js

# please have core-http-server running before running this goal
core-http-request-low-level:
	@echo "Running low level HTTP request example ..."
	@echo "this will make low level HTTP requests to the server running on port 8080"
	node src/core_http/low_level_request.js


# file system
core-fs:
	node src/core_fs/async_file_read.js
	node src/core_fs/sync_file_read.js
	@echo "Read file with promises example =============="
	node src/core_fs/async_file_read_w_promise.js

# os
core-os:
	node src/core_os/os_info.js

# json
core-json:
	@echo "\nConverting JSON to JS object ..." 
	node src/core_json/json_to_js_obj.js
	@echo "\nConverting JS object to JSON ..."
	node src/core_json/js_obj_to_json.js
	@echo "\nConverting XML to JSON ..."
	node src/core_json/xml_to_json.js 