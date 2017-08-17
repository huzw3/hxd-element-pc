/**
 * Created by Hu on 2017/8/17.
 */

var common =
{
    hxdServletUrl: 'http://127.0.0.1:8088/rest/',

    error: {
        "code": "",
        "message": ""
    },
    getErrors: function (code, msg) {
        this.error.code = code;
        this.error.message = msg;
        return JSON.stringify(this.error);
    },

    /*
     * @description 通过ajax调用后端服务
     * @ postUrl: restEasy中配置的接口对应路径
     * @ params: 请求报文参数，post请求body中的参数
     * @ self: 调用者的this参数
     * @ callBackMethod: 执行完ajax后，如果返回结果正确的回调函数
     * @ success: 如果http状态200正确返回，则执行
     * @ error: 如果http返回错误，则执行
     */
    hxdAjax: function (postUrl, params, self, callBackMethod) {
        var my = this;
        console.log("call:" + postUrl + " with params:" + JSON.stringify(params) )
        $.ajax({
            type: "POST",
            url: this.hxdServletUrl + postUrl,
            dataType: "json",
            async: false,
            contentType: "application/json",
            data: JSON.stringify(params),
            success : function (result) {
                callBackMethod(result);
                // if (result.resultCode == 0) {
                //     callBackMethod(result);
                // } else {
                //     self.$notify.error({
                //         title: 'Error',
                //         message: my.getErrors(result.resultCode, result.resultMsg)
                //     });
                // }
            },
            error:function (result) {
                self.$alert('错误信息：'+JSON.stringify(result), '错误', {
                    confirmButtonText: '确定'
                });
            }
        });
    },


    /*
     * @description 获取URL参数
     * @ name: 要获取的参数名称
     * @ path: route的fullPath
     */
    getUrlParams: function (name, path) {
        var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)");
        path = path.substring(path.indexOf("?"));
        var param = path.substr(1).match(reg);
        if (param != null) {
            return unescape(param[2]);
        } else {
            return null;
        }
    }

};
module.exports = common;
