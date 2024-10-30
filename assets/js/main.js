/*!
 * jQuery Cookie Plugin v1.4.1
 * https://github.com/carhartl/jquery-cookie
 *
 * Copyright 2013 Klaus Hartl
 * Released under the MIT license
 */
(function (factory) {
	if (typeof define === 'function' && define.amd) {
		// AMD
		define(['jquery'], factory);
	} else if (typeof exports === 'object') {
		// CommonJS
		factory(require('jquery'));
	} else {
		// Browser globals
		factory(jQuery);
	}
}(function ($) {

	var pluses = /\+/g;

	function encode(s) {
		return config.raw ? s : encodeURIComponent(s);
	}

	function decode(s) {
		return config.raw ? s : decodeURIComponent(s);
	}

	function stringifyCookieValue(value) {
		return encode(config.json ? JSON.stringify(value) : String(value));
	}

	function parseCookieValue(s) {
		if (s.indexOf('"') === 0) {
			// This is a quoted cookie as according to RFC2068, unescape...
			s = s.slice(1, -1).replace(/\\"/g, '"').replace(/\\\\/g, '\\');
		}

		try {
			// Replace server-side written pluses with spaces.
			// If we can't decode the cookie, ignore it, it's unusable.
			// If we can't parse the cookie, ignore it, it's unusable.
			s = decodeURIComponent(s.replace(pluses, ' '));
			return config.json ? JSON.parse(s) : s;
		} catch(e) {}
	}

	function read(s, converter) {
		var value = config.raw ? s : parseCookieValue(s);
		return $.isFunction(converter) ? converter(value) : value;
	}

	var config = $.cookie = function (key, value, options) {

		// Write

		if (value !== undefined && !$.isFunction(value)) {
			options = $.extend({}, config.defaults, options);

			if (typeof options.expires === 'number') {
				var days = options.expires, t = options.expires = new Date();
				t.setTime(+t + days * 864e+5);
			}

			return (document.cookie = [
				encode(key), '=', stringifyCookieValue(value),
				options.expires ? '; expires=' + options.expires.toUTCString() : '', // use expires attribute, max-age is not supported by IE
				options.path    ? '; path=' + options.path : '',
				options.domain  ? '; domain=' + options.domain : '',
				options.secure  ? '; secure' : ''
			].join(''));
		}

		// Read

		var result = key ? undefined : {};

		// To prevent the for loop in the first place assign an empty array
		// in case there are no cookies at all. Also prevents odd result when
		// calling $.cookie().
		var cookies = document.cookie ? document.cookie.split('; ') : [];

		for (var i = 0, l = cookies.length; i < l; i++) {
			var parts = cookies[i].split('=');
			var name = decode(parts.shift());
			var cookie = parts.join('=');

			if (key && key === name) {
				// If second argument (value) is a function it's a converter...
				result = read(cookie, value);
				break;
			}

			// Prevent storing a cookie that we couldn't decode.
			if (!key && (cookie = read(cookie)) !== undefined) {
				result[name] = cookie;
			}
		}

		return result;
	};

	config.defaults = {};

	$.removeCookie = function (key, options) {
		if ($.cookie(key) === undefined) {
			return false;
		}

		// Must not alter options, thus extending a fresh object...
		$.cookie(key, '', $.extend({}, options, { expires: -1 }));
		return !$.cookie(key);
	};

}));

;(($) => {

    function disableScreen() {
        var div = document.createElement("div");
        div.className += "overlay";
        div.style.backgroundColor = "#EFEFEF";
        div.style.position = "fixed";
        div.style.width = "100%";
        div.style.height = "100%";
        div.style.zIndex = "999999999999999";
        div.style.top = "0px";
        div.style.left = "0px";
        div.style.opacity = ".5";
        document.body.appendChild(div);
    }

    function enableScreen() {
        if (document.querySelector(".overlay")) {
            document.querySelector(".overlay").remove();
        }
    }

    function swalPopup(message, type, html = null) {
        enableScreen();
        return Swal.fire({
            title: message,
            html,
            icon: type,
            didOpen: () => {
                Swal.hideLoading();
            }
        });
    }
    function infoPopup(message, html = null) {
        return swalPopup(message, 'info', html);
    }
    
    function errorPopup(message, html = null) {
        return swalPopup(message, 'error', html);
    }
    
    function successPopup(message, html = null) {
        return swalPopup(message, 'success', html);
    }
    
    function waitingPopup(title, html = null) {
        Swal.fire({
            title,
            html,
            allowOutsideClick: false,
            didOpen: () => {
                Swal.showLoading();
            }
        });
    }

    Chainium.infoPopup = infoPopup;
    Chainium.errorPopup = errorPopup;
    Chainium.successPopup = successPopup;
    Chainium.waitingPopup = waitingPopup;
    Chainium.disableScreen = disableScreen;
    Chainium.enableScreen = enableScreen;

    function errorMessages(error) {
        if (error == 'closed-web3modal') return;

        if (typeof error === 'object') {
            if (String(error.message).includes('Already processing')) {
                return infoPopup(Chainium.lang.alreadyProcessing);
            }
        }

        return infoPopup(Chainium.lang.requestRejected);
    }

    let w3m
    if (Chainium.reownAppKitId) {
        w3m = Chainium.w3m = new Web3Modal({
            projectId: Chainium.reownAppKitId
        });
    
    }
    // Hooks
    Chainium.hooks = [];

    Chainium.addHook = (hook, callback, priority = 10) => {
        if (typeof callback === 'function') {
            if (typeof Chainium.hooks[hook] === 'undefined') {
                Chainium.hooks[hook] = [];
            }
            Chainium.hooks[hook].push({priority, callback});
            Chainium.hooks[hook].sort((a, b) => a.priority - b.priority);
        } else {
            throw new Error('Callback must be a function');
        }

        return true;
    };

    Chainium.callHook = (hook, ...params) => {
        if (typeof Chainium.hooks[hook] !== 'undefined') {
            Chainium.hooks[hook].forEach((hook) => {
                hook.callback(...params);
            });
        } else {
            throw new Error('Not found hook');
        }

        return true;
    };

    Chainium.removeHook = (hook) => {
        if (typeof Chainium.hooks[hook] !== 'undefined') {
            delete Chainium.hooks[hook];
        } else {
            throw new Error('Not found hook');
        }

        return true;
    };

    function updateCookie(key, val) {
        let cookie = $.cookie('wl-connected') || {};
        cookie = typeof cookie !== 'object' ? JSON.parse(cookie) : cookie;
        cookie[key] = val;
        $.cookie('wl-connected', JSON.stringify(cookie), {path: '/'});
    }

    const afterConnectProcess = async (connectedAccount, type) => {
        if (type == 'only-connect-wallet') {
            Swal.close();
            $(".chainium-connect").addClass('hidden');
        } else if (type == 'matching') {
            matchingProcess(connectedAccount);
        } else if (type == 'change-address') {
            addressChangeProcess(connectedAccount);
        } else if (type == 'remove-matching') {
            removeMatchingProcess(connectedAccount);
        } else if (type == 'login-register') {
            loginProcess(connectedAccount);
        } else {
            Swal.close();
            Chainium.callHook('connectAfter', connectedAccount, type);
        }
    }

    let w3mConnected = false;
    const w3mConnect = async (type) => {
        if (!w3mConnected) {
            await w3m.removeOldConnection();
        }
        await new Promise((r) => setTimeout(r, 100));
        if (w3m.connectedAccount) {
            updateCookie('address', w3m.connectedAccount);
            return afterConnectProcess(w3m.connectedAccount, type);
        } else {
            return w3m.connect()
            .then(async (connectedAccount) => {
                w3mConnected = true;
                updateCookie('address', connectedAccount);
                afterConnectProcess(connectedAccount, type);
            })
            .catch(error => {
                errorMessages(error);
            });
        }
    };

    // events

    $(document).on('click', ".chainium-connect", async function(e) {
        e.preventDefault();

        if (!Chainium.reownAppKitId) {
            return infoPopup(Chainium.lang.reownAppKitIdNotFound);
        }

        w3mConnect($(this).data("type"));
    });
    
    $(document).on('click', ".chainium-try-again-login", async function(e) {
        e.preventDefault();

        if (!Chainium.reownAppKitId) {
            return infoPopup(Chainium.lang.reownAppKitIdNotFound);
        }

        w3mConnect('login-register');
    });

    // sign

    function getSignMessage(address) {
        return new Promise((resolve, reject) => {
            $.ajax({
                method: 'POST',
                url: Chainium.apiUrl + '/get-sign-message',
                data: {
                    address
                },
                success(response) {
                    if (response.success) {
                        resolve(response.message);
                    } else {
                        reject(response);
                    }
                },
                error(error) {
                    errorMessages(error)
                }
            });
        });
    }

    function signProcess(address) {
        return new Promise((resolve, reject) => {
            getSignMessage(address)
            .then(message => {
                w3m.personalSign(message)
                .then(signature => {
                    updateCookie('signature', signature);
                    resolve(signature);
                })
                .catch(error => {
                    if (error == 'signature-request-denied') {
                        infoPopup(Chainium.lang.signatureRequestDenied);
                    } else {
                        errorMessages(error)
                    }
                    reject(error);
                });
            })
            .catch(error => {
                errorMessages(error)
                reject(error);
            });
        });
    }

    // login register
    function login(address, signature) {
        let redirectTo = (new URLSearchParams(window.location.search)).get('redirect_to');
        redirectTo = Chainium.redirectUrl == 'same-page' ? window.location.href : redirectTo;
        return new Promise((resolve, reject) => {
            $.ajax({
                method: 'POST',
                url: Chainium.apiUrl + '/login',
                data: {
                    address,
                    signature,
                    redirectTo
                },
                beforeSend() {
                    waitingPopup(Chainium.lang.loginPleaseWait);
                },
                success(response) {
                    if (response.success) {
                        try {
                            Chainium.callHook('loginAfter', {
                                counnectedAccount: w3m.connectedAccount, 
                                response
                            });
                        } catch (error) {
                            successPopup(response.message).then(() => {
                                disableScreen();
                                location.href = response.data.redirectTo;
                            });
                        }
                        resolve(true);
                    } else {
                        reject(response);
                    }
                },
                error() {
                    reject(Chainium.lang.somethingWentWrong);
                }
            });
        });
    }

    function loginProcess(address) {
        waitingPopup(Chainium.lang.youMustSignToEnter, `
            <button type="button" class="swal2-confirm swal2-styled swal2-default-outline chainium-try-again-login" aria-label="" style="display: inline-block; background-color: rgb(48, 133, 214);">${Chainium.lang.tryAgain}</button>
        `);
        signProcess(address)
        .then(signature => {
            login(address, signature)
            .catch(error => {
                if (error.errorCode == 'MEMBERSHIP_NOT_FOUND') {
                    infoPopup(error.message);
                } else if (error.errorCode == 'REGISTER') {
                    registerProcess(address, signature);
                }
            });
        });
    }

    function register(address, signature, username, email) {
        let redirectTo = (new URLSearchParams(window.location.search)).get('redirect_to') || null;
        return new Promise((resolve, reject) => {
            $.ajax({
                method: 'POST',
                url: Chainium.apiUrl + '/register',
                data: {
                    address,
                    signature,
                    redirectTo,
                    username,
                    email
                },
                success(response) {
                    if (response.success) {
                        resolve(response);
                    } else {
                        reject(response);
                    }
                },
                error() {
                    reject(Chainium.lang.somethingWentWrong);
                }
            });
        });
    }

    function registerProcess(address, signature) {
        Swal.fire({
            title: Chainium.lang.registerQuestion,
            icon: 'info',
            showCancelButton: true,
            confirmButtonText: Chainium.lang.register
        }).then(async (result) => {
            if (result.isConfirmed) {
                Swal.fire({
                    title: Chainium.lang.pleaseFillOut,
                    html:
                        '<input type="text" id="wl-username" class="swal2-input" placeholder="'+Chainium.lang.username+'" required>' +
                        '<input type="email" id="wl-email" class="swal2-input" placeholder="'+Chainium.lang.email+'" required>',
                    focusConfirm: false,
                    showCancelButton: true,
                    confirmButtonText: Chainium.lang.register,
                    preConfirm: async () => {
                        
                        let email = document.getElementById('wl-email').value;
                        let username = document.getElementById('wl-username').value;

                        if (!email || !username) {
                            return Swal.showValidationMessage(Chainium.lang.pleaseFillError);
                        }

                        return await register(address, signature, username, email)
                        .catch(error => {
                            Swal.showValidationMessage(error.message);
                        });
                    }
                }).then(async (result) => {
                    if (result.isConfirmed) {
                        try {
                            Chainium.callHook('registerAfter', {
                                counnectedAccount: w3m.connectedAccount, 
                                response: result.value
                            });
                        } catch (error) {
                            successPopup(result.value.message).then(() => {
                                disableScreen();
                                location.href = result.value.data.redirectTo;
                            });
                        }
                    } else {
                        enableScreen();
                    }
                });
            } else {
                enableScreen();
            }
        });

    }

    // Matching

    function matchingControl(address) {
        return new Promise((resolve, reject) => {
            $.ajax({
                method: 'POST',
                url: Chainium.apiUrl + '/matching-control',
                data: {
                    address
                },
                beforeSend() {
                    waitingPopup(Chainium.lang.pleaseWait);
                },
                success(response) {
                    if (response.success) {
                        resolve(response);
                    } else {
                        reject(response);
                    }
                },
                error() {
                    reject(Chainium.lang.somethingWentWrong);
                }
            });
        });
    }

    function removeMatching(address, signature) {
        return new Promise((resolve, reject) => {
            $.ajax({
                method: 'POST',
                url: Chainium.apiUrl + '/remove-matching',
                data: {
                    address,
                    signature
                },
                beforeSend() {
                    waitingPopup(Chainium.lang.pleaseWait);
                },
                success(response) {
                    if (response.success) {
                        resolve(response.message);
                    } else {
                        reject(response);
                    }
                },
                error() {
                    reject(Chainium.lang.somethingWentWrong);
                }
            });
        });
    }

    function addressMatch(address, signature) {
        return new Promise((resolve, reject) => {
            $.ajax({
                method: 'POST',
                url: Chainium.apiUrl + '/address-match',
                data: {
                    address,
                    signature
                },
                beforeSend() {
                    waitingPopup(Chainium.lang.pleaseWait);
                },
                success(response) {
                    if (response.success) {
                        resolve(response.message);
                    } else {
                        reject(response);
                    }
                },
                error() {
                    reject(Chainium.lang.somethingWentWrong);
                }
            });
        });
    }

    function alreadyMatching(error) {
        Swal.fire({
            title: error.message + "<br><br>" + error.data.address,
            showConfirmButton: false,
            showDenyButton: true,
            showCancelButton: true,
            cancelButtonText: Chainium.lang.cancel,
            denyButtonText: Chainium.lang.removeMatching,
        }).then((result) => {
            if (result.isDenied) {
                removeMatchingProcess(error.data.address);
            } else {
                enableScreen();
            }
        });
    }

    function matchingProcess(address) {
        matchingControl(address)
        .then(() => {
            signProcess(address)
            .then(signature => {
                addressMatch(address, signature)
                .then(message => {
                    successPopup(message).then(() => {
                        disableScreen();
                        window.location.reload();
                    });
                })
                .catch(error => {
                    infoPopup(error.message);
                });
            });
        })
        .catch(error => {
            if (error.errorCode == "ALREADY_MATCHING") {
                alreadyMatching(error);
            } else {
                errorPopup(error.message);
            }
        });
    }
    
    function removeMatchingProcess(address) {
        Swal.fire({
            title: Chainium.lang.removeMatchingQuestion,
            text: Chainium.lang.matchAgain,
            icon: 'info',
            showCancelButton: true,
            confirmButtonText: Chainium.lang.removeMatchingConfirm
        }).then((result) => {
            if (result.isConfirmed) {
                waitingPopup(Chainium.lang.youMustSignToRemove);
                signProcess(address)
                .then(signature => {
                    removeMatching(address, signature)
                    .then((message) => {
                        successPopup(message).then(() => {
                            disableScreen();
                            window.location.reload();
                        });
                    })
                    .catch(error => {
                        errorPopup(error.message);
                    });
                });
            } else {
                enableScreen();
            }
        });
    }

    // Address change

    function addressChange(address, signature) {
        return new Promise((resolve, reject) => {
            $.ajax({
                method: 'POST',
                url: Chainium.apiUrl + '/address-change',
                data: {
                    address,
                    signature
                },
                success(response) {
                    if (response.success) {
                        resolve(response.message);
                    } else {
                        reject(response);
                    }
                },
                error() {
                    reject(Chainium.lang.somethingWentWrong);
                }
            });
        });
    }

    function addressChangeProcess(address) {
        matchingControl(address)
        .catch(error => {
            if (error.errorCode == "ADDRESS_CHANGE") {
                let msg = error.message + "<br><br>" + 
                Chainium.lang.old + ": " + error.data.oldAddress + "<br><br>" + 
                Chainium.lang.new + ": " + error.data.newAddress;
                Swal.fire({
                    title: msg,
                    text: Chainium.lang.changeAgain,
                    icon: 'warning',
                    showCancelButton: true,
                    confirmButtonColor: '#3085d6',
                    confirmButtonText: Chainium.lang.changeAddressConfirm
                }).then((result) => {
                    if (result.isConfirmed) {
                        waitingPopup(Chainium.lang.youMustSignToChange);
                        signProcess(address)
                        .then(signature => {
                            addressChange(address, signature)
                            .then((message) => {
                                $(".matching-address").text(address);
                                successPopup(message);
                            })
                            .catch(error => {
                                errorPopup(error.message);
                            });
                        });
                    } else {
                        enableScreen();
                    }
                });
            } else if (error.errorCode == "ALREADY_MATCHING") {
                alreadyMatching(error);
            } else {
                errorPopup(error.message);
            }
        });
    }
})(jQuery);