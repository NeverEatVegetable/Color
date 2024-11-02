System.register(["__unresolved_0", "cc", "tsrpc-cli"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, CodeTemplate, _crd, tsrpcConf;

  function _reportPossibleCrUseOfCodeTemplate(extras) {
    _reporterNs.report("CodeTemplate", "tsrpc-cli", _context.meta, extras);
  }

  function _reportPossibleCrUseOfTsrpcConfig(extras) {
    _reporterNs.report("TsrpcConfig", "tsrpc-cli", _context.meta, extras);
  }

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
    }, function (_tsrpcCli) {
      CodeTemplate = _tsrpcCli.CodeTemplate;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "d72afVeG05HNJ+asiE8O6CM", "tsrpc.config", undefined);

      tsrpcConf = {
        // Generate ServiceProto
        proto: [{
          //大厅服务器
          ptlDir: 'src/shared/hallClient/protocols',
          // Protocol dir
          output: 'src/shared/hallClient/protocols/serviceProto.ts',
          // Path for generated ServiceProto
          apiDir: 'src/hallServer/api',
          // API dir
          docDir: 'docs/hallServer',
          // API documents dir
          ptlTemplate: (_crd && CodeTemplate === void 0 ? (_reportPossibleCrUseOfCodeTemplate({
            error: Error()
          }), CodeTemplate) : CodeTemplate).getExtendedPtl() // msgTemplate: CodeTemplate.getExtendedMsg(),

        }, {
          //游戏服务器
          ptlDir: 'src/shared/gameClient/protocols',
          // Protocol dir
          output: 'src/shared/gameClient/protocols/serviceProto.ts',
          // Path for generated ServiceProto
          apiDir: 'src/gameServer/api',
          // API dir
          docDir: 'docs/gameServer',
          // API documents dir
          ptlTemplate: (_crd && CodeTemplate === void 0 ? (_reportPossibleCrUseOfCodeTemplate({
            error: Error()
          }), CodeTemplate) : CodeTemplate).getExtendedPtl() // msgTemplate: CodeTemplate.getExtendedMsg(),

        }, {
          //demo服务器
          ptlDir: 'src/shared/demoClient/protocols',
          // Protocol dir
          output: 'src/shared/demoClient/protocols/serviceProto.ts',
          // Path for generated ServiceProto
          apiDir: 'src/demoServer/api',
          // API dir
          docDir: 'docs/demoServer',
          // API documents dir
          ptlTemplate: (_crd && CodeTemplate === void 0 ? (_reportPossibleCrUseOfCodeTemplate({
            error: Error()
          }), CodeTemplate) : CodeTemplate).getExtendedPtl() // msgTemplate: CodeTemplate.getExtendedMsg(),

        }, {
          //游戏集群服务器
          ptlDir: 'src/shared/tsgfServer/gameCluster/protocols',
          // Protocol dir
          output: 'src/shared/tsgfServer/gameCluster/protocols/serviceProto.ts',
          // Path for generated ServiceProto
          apiDir: 'src/gameServerCluster/api',
          // API dir
          docDir: 'docs/gameServerCluster',
          // API documents dir
          ptlTemplate: (_crd && CodeTemplate === void 0 ? (_reportPossibleCrUseOfCodeTemplate({
            error: Error()
          }), CodeTemplate) : CodeTemplate).getExtendedPtl()
        }, {
          //匹配集群服务器
          ptlDir: 'src/shared/tsgfServer/matchCluster/protocols',
          // Protocol dir
          output: 'src/shared/tsgfServer/matchCluster/protocols/serviceProto.ts',
          // Path for generated ServiceProto
          apiDir: 'src/matchServerCluster/api',
          // API dir
          docDir: 'docs/matchServerCluster',
          // API documents dir
          ptlTemplate: (_crd && CodeTemplate === void 0 ? (_reportPossibleCrUseOfCodeTemplate({
            error: Error()
          }), CodeTemplate) : CodeTemplate).getExtendedPtl()
        }],
        // Sync shared code
        sync: [{
          from: 'src/shared/tsgf',
          to: '../tsgf-sdk/src/tsgf',
          type: 'copy' // Change this to 'copy' if your environment not support symlink

        }, {
          from: 'src/shared/hallClient',
          to: '../tsgf-sdk/src/hallClient',
          type: 'copy' // Change this to 'copy' if your environment not support symlink

        }, {
          from: 'src/shared/gameClient',
          to: '../tsgf-sdk/src/gameClient',
          type: 'copy' // Change this to 'copy' if your environment not support symlink

        }, {
          from: 'src/shared/demoClient/protocols',
          to: '../tsgf-dev-demo-client/src/protocols',
          type: 'copy' // Change this to 'copy' if your environment not support symlink

        }],
        // Dev server
        dev: {
          autoProto: true,
          // Auto regenerate proto
          autoSync: true,
          // Auto sync when file changed
          autoApi: true,
          // Auto create API when ServiceProto updated
          watch: 'src',
          // Restart dev server when these files changed
          entry: 'src/index.ts' // Dev server command: node -r ts-node/register {entry}
          //nodeArgs: ["--inspect-brk=33865"], // 可以打开远程调试,方便使用devTool调试检查内存性能等

        },
        // Build config
        build: {
          autoProto: true,
          // Auto generate proto before build
          autoSync: true,
          // Auto sync before build
          autoApi: true,
          // Auto generate API before build
          outDir: 'dist' // Clean this dir before build

        }
      };

      _export("default", tsrpcConf);

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=9fc5b211f9c23cdd1048c74cf7cbf5caaf518145.js.map