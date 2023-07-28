exports.id = 366;
exports.ids = [366];
exports.modules = {

/***/ 8556:
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 4249, 23));
Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 4564, 23));
Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 885, 23));
Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 772, 23));
Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 8262, 23))

/***/ }),

/***/ 2592:
/***/ (() => {



/***/ }),

/***/ 9150:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   z: () => (/* binding */ Button)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6786);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1198);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _s_module_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(719);
/* harmony import */ var _s_module_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_s_module_scss__WEBPACK_IMPORTED_MODULE_2__);



const Button = ({ children, className, btnType, ...props })=>{
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
        className: classnames__WEBPACK_IMPORTED_MODULE_1___default()((_s_module_scss__WEBPACK_IMPORTED_MODULE_2___default())[btnType], (_s_module_scss__WEBPACK_IMPORTED_MODULE_2___default().button), className),
        ...props,
        children: children
    });
};


/***/ }),

/***/ 7531:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  Form: () => (/* binding */ Form)
});

// EXTERNAL MODULE: external "next/dist/compiled/react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(6786);
// EXTERNAL MODULE: external "next/dist/compiled/react"
var react_ = __webpack_require__(8038);
;// CONCATENATED MODULE: ./src/components/Input/hooks/useTogglePlaceholder.ts

const useTogglePlaceholder = ({ inputId, placeholderId, value })=>{
    (0,react_.useEffect)(()=>{
        const input = document.getElementById(inputId);
        const placeholder = document.getElementById(placeholderId);
        if (!placeholder) return;
        if (!input) return;
        placeholder.onclick = ()=>input.focus();
    }, [
        value
    ]);
};

;// CONCATENATED MODULE: ./src/components/Input/components/Header/index.tsx

const Header = ({ header, labelId })=>/*#__PURE__*/ jsx_runtime_.jsx("label", {
        htmlFor: labelId,
        children: /*#__PURE__*/ jsx_runtime_.jsx("h4", {
            children: header
        })
    });

// EXTERNAL MODULE: ./src/components/Input/s.module.scss
var s_module = __webpack_require__(1315);
var s_module_default = /*#__PURE__*/__webpack_require__.n(s_module);
// EXTERNAL MODULE: ./node_modules/classnames/index.js
var classnames = __webpack_require__(1198);
var classnames_default = /*#__PURE__*/__webpack_require__.n(classnames);
;// CONCATENATED MODULE: ./src/components/Input/index.tsx






const Input = /*#__PURE__*/ (0,react_.memo)(/*#__PURE__*/ (0,react_.forwardRef)(({ className, header, name, id, value, Placeholder, PlaceholderStyle, upperCase, type = "text", ...props }, ref)=>{
    const inputId = (0,react_.useId)();
    const placeholderId = (0,react_.useId)();
    useTogglePlaceholder({
        inputId,
        placeholderId,
        value
    });
    const values = upperCase ? value?.toString().toUpperCase() : value;
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: classnames_default()((s_module_default()).wrapper, className),
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(Header, {
                header: header,
                labelId: inputId
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: (s_module_default()).placeholderWrapper,
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("input", {
                        ref: ref,
                        id: classnames_default()(inputId, id),
                        value: values,
                        name: name,
                        type: type,
                        ...props
                    }),
                    Placeholder && !value && /*#__PURE__*/ jsx_runtime_.jsx("span", {
                        id: placeholderId,
                        className: (s_module_default()).placeholder,
                        style: PlaceholderStyle,
                        children: Placeholder
                    })
                ]
            })
        ]
    });
}));
Input.displayName = "Input";

// EXTERNAL MODULE: ./src/components/Button/index.tsx
var Button = __webpack_require__(9150);
;// CONCATENATED MODULE: ./src/lib/hooks/useInput.ts

/**
 * Валидириует поле по регулярному выражению
 */ const useIsValidInput = (initialValue)=>{
    const [value, setValue] = (0,react_.useState)(initialValue);
    const onChange = (0,react_.useCallback)((e, RegExp)=>{
        const { value } = e.target;
        if (RegExp) {
            if (value) {
                const lastChar = value.at(-1);
                const isValid = lastChar?.match(RegExp);
                if (!isValid) return;
            }
        }
        setValue(value);
    }, []);
    return [
        value,
        onChange
    ];
};
/**
 * Создаёт маску для ввода Гос. номера автомобиля
 */ const useInputStateNumberWithMask = (initialValue)=>{
    const [value, setValue] = (0,react_.useState)(initialValue);
    const onChange = (0,react_.useCallback)((e)=>{
        const { value } = e.target;
        if (value) {
            if (value.length === 1 && !value[0].match(/\D/)) return;
            if (value.length === 2 && !value[1].match(/\d/)) return;
            if (value.length === 3 && !value[2].match(/\d/)) return;
            if (value.length === 4 && !value[3].match(/\d/)) return;
            if (value.length === 5 && !value[4].match(/\D/)) return;
            if (value.length === 6 && !value[5].match(/\D/)) return;
            if (value.length === 7 && !value[6].match(/\d/)) return;
            if (value.length === 8 && !value[7].match(/\d/)) return;
            if (value.length === 9 && !value[8].match(/\d/)) return;
        }
        setValue(value.toUpperCase());
    }, []);
    return [
        value,
        onChange
    ];
};
/**
 * Создаёт маску для ввода даты
 */ const useInputDateWithMask = (initialValue)=>{
    const [date, setDate] = (0,react_.useState)(initialValue);
    const onChange = (0,react_.useCallback)((e)=>{
        const { value } = e.target;
        if (value) {
            if (!value.match(/^[\d\.]+$/)) return;
            if (value.length === 2) {
                return setDate(value + ".");
            }
            if (value.length === 5) {
                return setDate(value + ".");
            }
        }
        setDate(value);
    }, []);
    return [
        date,
        onChange
    ];
};

;// CONCATENATED MODULE: ./src/lib/fn/getFromSessionStorage.ts
const getFromSessionStorage = (key)=>{
    return sessionStorage.getItem(key) || "";
};

;// CONCATENATED MODULE: ./src/components/Form/fetchData.ts
const fetchData = async (data)=>{
    try {
        const res = await Promise.resolve({
            status: "OK"
        });
        console.log(res);
        alert("Отправка успешна");
    } catch (err) {
        console.log(err);
        alert("Ошибка отправки");
    }
};

// EXTERNAL MODULE: ./src/components/Form/s.module.scss
var Form_s_module = __webpack_require__(1234);
var Form_s_module_default = /*#__PURE__*/__webpack_require__.n(Form_s_module);
// EXTERNAL MODULE: ./src/components/Form/components/CloseBtn/s.module.scss
var CloseBtn_s_module = __webpack_require__(4329);
var CloseBtn_s_module_default = /*#__PURE__*/__webpack_require__.n(CloseBtn_s_module);
;// CONCATENATED MODULE: ./src/components/Form/components/CloseBtn/index.tsx


const CloseBtn = ({ closeForm, children })=>{
    return /*#__PURE__*/ jsx_runtime_.jsx("div", {
        className: (CloseBtn_s_module_default()).closeBtn,
        onClick: closeForm,
        children: "\xd7"
    });
};

;// CONCATENATED MODULE: ./src/components/Form/index.tsx
/* __next_internal_client_entry_do_not_use__ Form auto */ 








const regExpStateNumber = "\\D\\d{3}\\D{2}\\d{3}";
const regExpDate = "\\d{2}\\.\\d{2}\\.\\d{4}";
const Form = ({ toggleModal })=>{
    //Гос.номер
    const [stateNumber, setStateNumber] = useInputStateNumberWithMask(getFromSessionStorage("stateNumber"));
    //Автомобиль
    const [automobile, setAutomobile] = useIsValidInput(getFromSessionStorage("automobile"));
    //Дата прибытия
    const [arrivalDate, setData] = useIsValidInput(getFromSessionStorage("arrivalDate"));
    //Серия паспорта
    const [passportSeries, setpassportSeries] = useIsValidInput(getFromSessionStorage("passportSeries"));
    //Номер паспорта
    const [passportNumber, setPassportNumber] = useIsValidInput(getFromSessionStorage("passportNumber"));
    //ФИО
    const [fullName, setFullName] = useIsValidInput(getFromSessionStorage("fullName"));
    //Кем выдан
    const [issuedBy, setIssuedBy] = useIsValidInput(getFromSessionStorage("issuedBy"));
    //Когда выдан
    const [whenIssued, setWhenIssued] = useInputDateWithMask(getFromSessionStorage("whenIssued"));
    const data = {
        stateNumber,
        automobile,
        arrivalDate,
        fullName,
        passportSeries,
        passportNumber,
        issuedBy,
        whenIssued
    };
    const dependencies = [
        stateNumber,
        arrivalDate,
        automobile,
        passportSeries,
        passportNumber,
        fullName,
        issuedBy,
        whenIssued
    ];
    (0,react_.useEffect)(()=>{
        Object.entries(data).forEach(([key, value])=>{
            sessionStorage.setItem(key, value);
        });
    }, dependencies);
    const closeForm = ()=>{
        toggleModal && toggleModal(false);
    };
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("form", {
        className: (Form_s_module_default()).form,
        onSubmit: (e)=>{
            e.preventDefault();
            fetchData(data);
        },
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(CloseBtn, {
                closeForm: closeForm
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("h2", {
                children: "Транспортные средства и водители"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(Input, {
                required: true,
                autoFocus: true,
                maxLength: 9,
                minLength: 9,
                name: "stateNumber",
                header: "Гос-номер",
                value: stateNumber,
                onChange: setStateNumber,
                pattern: regExpStateNumber,
                placeholder: "Укажите гос-номер"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(Input, {
                required: true,
                name: "automobile",
                value: automobile,
                onChange: setAutomobile,
                header: "Транспортное средство",
                placeholder: "Транспортное средство",
                upperCase: true
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(Input, {
                required: true,
                name: "arrivalDate",
                header: "Ориентировочная дата прибытия к покупателю",
                value: arrivalDate,
                onChange: (e)=>{
                    setData(e);
                    console.log(arrivalDate);
                },
                Placeholder: "Дата *",
                type: "date"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("h3", {
                children: "Данные о водителе"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(Input, {
                required: true,
                name: "fullName",
                header: "ФИО",
                value: fullName,
                onChange: setFullName,
                placeholder: "Укажите ФИО водителя"
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: (Form_s_module_default()).passport,
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("label", {
                        htmlFor: "passport-input",
                        children: /*#__PURE__*/ jsx_runtime_.jsx("h4", {
                            children: "Паспортные данные"
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(Input, {
                        required: true,
                        name: "passportSeries",
                        maxLength: 4,
                        minLength: 4,
                        id: "passport-input",
                        type: "tel",
                        value: passportSeries,
                        onChange: (e)=>{
                            setpassportSeries(e, new RegExp("\\d", "g"));
                        },
                        placeholder: "серия"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(Input, {
                        required: true,
                        name: "passportNumber",
                        placeholder: "номер",
                        type: "tel",
                        maxLength: 6,
                        minLength: 6,
                        value: passportNumber,
                        onChange: (e)=>setPassportNumber(e, new RegExp("\\d", "g"))
                    })
                ]
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(Input, {
                required: true,
                value: issuedBy,
                name: "issuedBy",
                header: "Кем выдан",
                "aria-required": true,
                placeholder: "Кем выдан",
                onChange: setIssuedBy
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(Input, {
                required: true,
                value: whenIssued,
                name: "whenIssued",
                header: "Когда выдан",
                placeholder: "Когда выдан",
                onChange: setWhenIssued,
                maxLength: 10,
                minLength: 10,
                pattern: regExpDate
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: (Form_s_module_default())["btn-group"],
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx(Button/* Button */.z, {
                        btnType: "full",
                        children: "Отправить"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(Button/* Button */.z, {
                        onClick: closeForm,
                        btnType: "transparent",
                        children: "Отменить"
                    })
                ]
            })
        ]
    });
};


/***/ }),

/***/ 4502:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Header: () => (/* binding */ Header)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6786);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_ResizeCmp__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6641);
/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(9483);
/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_navigation__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1621);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _s_module_scss__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(546);
/* harmony import */ var _s_module_scss__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_s_module_scss__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(1198);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_4__);
/* __next_internal_client_entry_do_not_use__ Header auto */ 





const a = [
    {
        href: "/",
        text: "Задача 1"
    },
    {
        href: "/task2",
        text: "Задача 2"
    }
];
const Header = ({ className, ...props })=>{
    const pathName = (0,next_navigation__WEBPACK_IMPORTED_MODULE_2__.usePathname)();
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_ResizeCmp__WEBPACK_IMPORTED_MODULE_1__/* .ResizeCmp */ .O, {
        ...props,
        color: "silver",
        className: classnames__WEBPACK_IMPORTED_MODULE_4___default()((_s_module_scss__WEBPACK_IMPORTED_MODULE_5___default().header), className),
        children: a.map(({ href, text })=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_3___default()), {
                href: href,
                className: classnames__WEBPACK_IMPORTED_MODULE_4___default()({
                    [(_s_module_scss__WEBPACK_IMPORTED_MODULE_5___default().active)]: pathName === href
                }),
                children: text
            }, href))
    });
};


/***/ }),

/***/ 6641:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   O: () => (/* binding */ ResizeCmp)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6786);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1198);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _s_module_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(518);
/* harmony import */ var _s_module_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_s_module_scss__WEBPACK_IMPORTED_MODULE_2__);



const ResizeCmp = ({ id, style, children, className, color = "silver" })=>{
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        id: id,
        style: style,
        className: classnames__WEBPACK_IMPORTED_MODULE_1___default()((_s_module_scss__WEBPACK_IMPORTED_MODULE_2___default())[color], (_s_module_scss__WEBPACK_IMPORTED_MODULE_2___default()["resize-cmp"]), className),
        children: children
    });
};


/***/ }),

/***/ 719:
/***/ ((module) => {

// Exports
module.exports = {
	"button": "s_button__iP3xa",
	"transparent": "s_transparent__ZeHkW",
	"full": "s_full__QzxOh"
};


/***/ }),

/***/ 4329:
/***/ ((module) => {

// Exports
module.exports = {
	"closeBtn": "s_closeBtn__xdEJt"
};


/***/ }),

/***/ 1234:
/***/ ((module) => {

// Exports
module.exports = {
	"form": "s_form__bEL6N",
	"passport": "s_passport__8BMh2",
	"btn-group": "s_btn-group__MKnze"
};


/***/ }),

/***/ 546:
/***/ ((module) => {

// Exports
module.exports = {
	"header": "s_header__ICl6W",
	"active": "s_active__IY1Qz"
};


/***/ }),

/***/ 1315:
/***/ ((module) => {

// Exports
module.exports = {
	"wrapper": "s_wrapper__9zfJF",
	"placeholder": "s_placeholder__RFfA3",
	"placeholderWrapper": "s_placeholderWrapper__WRsWG"
};


/***/ }),

/***/ 518:
/***/ ((module) => {

// Exports
module.exports = {
	"resize-cmp": "s_resize-cmp__kC_Nk",
	"red": "s_red__Z3goj",
	"yellow": "s_yellow__5yR1g",
	"green": "s_green__yZOcM",
	"silver": "s_silver__8Ma1E"
};


/***/ }),

/***/ 5183:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   metadata: () => (/* binding */ metadata)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6786);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_font_google_target_css_path_src_app_layout_tsx_import_Roboto_arguments_weight_300_400_500_700_subsets_latin_variableName_roboto___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(3761);
/* harmony import */ var next_font_google_target_css_path_src_app_layout_tsx_import_Roboto_arguments_weight_300_400_500_700_subsets_latin_variableName_roboto___WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_font_google_target_css_path_src_app_layout_tsx_import_Roboto_arguments_weight_300_400_500_700_subsets_latin_variableName_roboto___WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _globals_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5553);
/* harmony import */ var _globals_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_globals_css__WEBPACK_IMPORTED_MODULE_1__);



const metadata = {
    title: "Task 1",
    description: "description"
};
const RootLayout = ({ children })=>{
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("html", {
        lang: "en",
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("body", {
            className: (next_font_google_target_css_path_src_app_layout_tsx_import_Roboto_arguments_weight_300_400_500_700_subsets_latin_variableName_roboto___WEBPACK_IMPORTED_MODULE_2___default().className),
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    id: "modal"
                }),
                children
            ]
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (RootLayout);


/***/ }),

/***/ 2947:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({"src":"/_next/static/media/image.e4c047d6.jpg","height":960,"width":1920,"blurDataURL":"data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoKCgoKCgsMDAsPEA4QDxYUExMUFiIYGhgaGCIzICUgICUgMy03LCksNy1RQDg4QFFeT0pPXnFlZXGPiI+7u/sBCgoKCgoKCwwMCw8QDhAPFhQTExQWIhgaGBoYIjMgJSAgJSAzLTcsKSw3LVFAODhAUV5PSk9ecWVlcY+Ij7u7+//CABEIAAQACAMBIgACEQEDEQH/xAAoAAEBAAAAAAAAAAAAAAAAAAAABgEBAQAAAAAAAAAAAAAAAAAAAwT/2gAMAwEAAhADEAAAAIUPP//EAB8QAAAEBwEAAAAAAAAAAAAAAAEDEUIAAgQFEhMiUf/aAAgBAQABPwCo7shZipPrLUQeGTvY/8QAGhEBAAEFAAAAAAAAAAAAAAAAAQACAxITIv/aAAgBAgEBPwC6tWvJXmf/xAAZEQABBQAAAAAAAAAAAAAAAAABAAMTIWP/2gAIAQMBAT8AZqUaFf/Z","blurWidth":8,"blurHeight":4});

/***/ }),

/***/ 2819:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var next_dist_lib_metadata_get_metadata_route__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9984);
/* harmony import */ var next_dist_lib_metadata_get_metadata_route__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_dist_lib_metadata_get_metadata_route__WEBPACK_IMPORTED_MODULE_0__);
  

  /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((props) => {
    const imageData = {"type":"image/x-icon","sizes":"any"}
    const imageUrl = (0,next_dist_lib_metadata_get_metadata_route__WEBPACK_IMPORTED_MODULE_0__.fillMetadataSegment)(".", props.params, "favicon.ico")

    return [{
      ...imageData,
      url: imageUrl + "",
    }]
  });

/***/ }),

/***/ 5553:
/***/ (() => {



/***/ })

};
;