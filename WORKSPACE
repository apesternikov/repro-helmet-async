load("@bazel_tools//tools/build_defs/repo:http.bzl", "http_archive")

http_archive(
    name = "aspect_rules_js",
    sha256 = "00e7b97b696af63812df0ca9e9dbd18579f3edd3ab9a56f227238b8405e4051c",
    strip_prefix = "rules_js-1.23.0",
    url = "https://github.com/aspect-build/rules_js/releases/download/v1.23.0/rules_js-v1.23.0.tar.gz",
)

load("@aspect_rules_js//js:repositories.bzl", "rules_js_dependencies")

rules_js_dependencies()

load("@rules_nodejs//nodejs:repositories.bzl", "DEFAULT_NODE_VERSION", "nodejs_register_toolchains")

nodejs_register_toolchains(
    name = "nodejs",
    node_version = DEFAULT_NODE_VERSION,
)

load("@aspect_rules_js//npm:npm_import.bzl", "npm_translate_lock")

npm_translate_lock(
    name = "npm",
    pnpm_lock = "//project:pnpm-lock.yaml",
    verify_node_modules_ignored = "//:.bazelignore",
)

load("@npm//:repositories.bzl", "npm_repositories")

npm_repositories()

npm_translate_lock(
    name = "npm_nows",
    pnpm_lock = "//noworkspaces:pnpm-lock.yaml",
    verify_node_modules_ignored = "//:.bazelignore",
)

load("@npm_nows//:repositories.bzl", npm_repositories_nows = "npm_repositories")

npm_repositories_nows()
