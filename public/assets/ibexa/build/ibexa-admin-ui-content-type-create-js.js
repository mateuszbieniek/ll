(self["webpackChunk"] = self["webpackChunk"] || []).push([["ibexa-admin-ui-content-type-create-js"],{

/***/ "./vendor/ibexa/admin-ui/src/bundle/Resources/public/js/scripts/admin.card.toggle.group.js":
/*!*************************************************************************************************!*\
  !*** ./vendor/ibexa/admin-ui/src/bundle/Resources/public/js/scripts/admin.card.toggle.group.js ***!
  \*************************************************************************************************/
/***/ (() => {

(function (global, doc) {
  var togglers = doc.querySelectorAll('.ibexa-card__body-display-toggler');

  var toggleFieldTypeView = function toggleFieldTypeView(event) {
    event.preventDefault();
    event.currentTarget.closest('.ibexa-card--toggle-group').classList.toggle('ibexa-card--collapsed');
  };

  var attachToggleField = function attachToggleField(btn) {
    return btn.addEventListener('click', toggleFieldTypeView);
  };

  togglers.forEach(function (btn) {
    return attachToggleField(btn);
  });
  doc.body.addEventListener('ibexa-initialize-card-toggle-group', function (event) {
    return attachToggleField(event.detail.button);
  });
})(window, window.document);

/***/ }),

/***/ "./vendor/ibexa/admin-ui/src/bundle/Resources/public/js/scripts/admin.contenttype.edit.js":
/*!************************************************************************************************!*\
  !*** ./vendor/ibexa/admin-ui/src/bundle/Resources/public/js/scripts/admin.contenttype.edit.js ***!
  \************************************************************************************************/
/***/ (() => {

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

function _get() { if (typeof Reflect !== "undefined" && Reflect.get) { _get = Reflect.get.bind(); } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(arguments.length < 3 ? target : receiver); } return desc.value; }; } return _get.apply(this, arguments); }

function _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf(object); if (object === null) break; } return object; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

(function (global, doc, ibexa, Routing, Translator) {
  var SELECTOR_INPUTS_TO_VALIDATE = '.ibexa-input[required]:not([disabled]):not([hidden])';
  var targetContainer = null;
  var sourceContainer = null;
  var currentDraggedItem = null;
  var draggedItemPosition = null;
  var isEditFormValid = false;
  var editForm = doc.querySelector('.ibexa-content-type-edit-form');
  var inputsToValidate = editForm.querySelectorAll(SELECTOR_INPUTS_TO_VALIDATE);
  var draggableGroups = [];
  var token = doc.querySelector('meta[name="CSRF-Token"]').content;
  var siteaccess = doc.querySelector('meta[name="SiteAccess"]').content;
  var sectionsNode = doc.querySelector('.ibexa-content-type-edit__sections');
  var filterFieldInput = doc.querySelector('.ibexa-available-field-types__sidebar-filter');
  var popupMenuElement = sectionsNode.querySelector('.ibexa-popup-menu');
  var addGroupTriggerBtn = sectionsNode.querySelector('.ibexa-content-type-edit__add-field-definitions-group-btn');
  var noFieldsAddedError = Translator.trans(
  /*@Desc("You have to add at least one field definition")*/
  'content_type.edit.error.no_added_fields_definition', {}, 'content_type');
  var endpoints = {
    add: {
      actionName: 'add_field_definition',
      method: 'POST',
      contentType: 'application/vnd.ibexa.api.ContentTypFieldDefinitionCreate+json'
    },
    remove: {
      actionName: 'remove_field_definition',
      method: 'DELETE',
      contentType: 'application/vnd.ibexa.api.ContentTypeFieldDefinitionDelete+json'
    },
    reorder: {
      actionName: 'reorder_field_definitions',
      method: 'PUT',
      contentType: 'application/vnd.ibexa.api.ContentTypeFieldDefinitionReorder+json'
    }
  };
  new ibexa.core.PopupMenu({
    popupMenuElement: popupMenuElement,
    triggerElement: addGroupTriggerBtn,
    onItemClick: function onItemClick(event) {
      var relatedCollapseSelector = event.currentTarget.dataset.relatedCollapseSelector;
      doc.querySelector(relatedCollapseSelector).classList.remove('ibexa-collapse--hidden');
      afterChangeGroup();
    }
  });

  var searchField = function searchField(event) {
    var fieldFilterQueryLowerCase = event.currentTarget.value.toLowerCase();
    var fields = doc.querySelectorAll('.ibexa-available-field-types__list .ibexa-available-field-type');
    fields.forEach(function (field) {
      var fieldNameNode = field.querySelector('.ibexa-available-field-type__label');
      var fieldNameLowerCase = fieldNameNode.innerText.toLowerCase();
      var isFieldHidden = !fieldNameLowerCase.includes(fieldFilterQueryLowerCase);
      field.classList.toggle('ibexa-available-field-type--hidden', isFieldHidden);
    });
  };

  var removeDragPlaceholders = function removeDragPlaceholders() {
    var placeholderNodes = doc.querySelectorAll('.ibexa-field-definitions-placeholder:not(.ibexa-field-definitions-placeholder--anchored)');
    placeholderNodes.forEach(function (placeholderNode) {
      return placeholderNode.remove();
    });
  };

  var createFieldDefinitionNode = function createFieldDefinitionNode(fieldNode) {
    var targetPlace = '';
    var items = targetContainer.querySelectorAll('.ibexa-collapse');

    if (typeof fieldNode === 'string') {
      var container = doc.createElement('div');
      container.insertAdjacentHTML('beforeend', fieldNode);
      fieldNode = container.querySelector('.ibexa-collapse');
    }

    if (draggedItemPosition === -1) {
      targetPlace = targetContainer.querySelector('.ibexa-field-definitions-placeholder--anchored');
    } else if (draggedItemPosition === 0) {
      targetPlace = targetContainer.firstChild;
    } else {
      targetPlace = _toConsumableArray(items).find(function (item, index) {
        return index === draggedItemPosition;
      });
    }

    fieldNode.classList.add('ibexa-collapse--field-definition-highlight');
    targetContainer.insertBefore(fieldNode, targetPlace);
    return fieldNode;
  };

  var attachFieldDefinitionNodeEvents = function attachFieldDefinitionNodeEvents(fieldNode) {
    var fieldGroupInput = fieldNode.querySelector('.ibexa-input--field-group');
    var removeFieldsBtn = fieldNode.querySelectorAll('.ibexa-collapse__extra-action-button--remove-field-definitions');
    var fieldInputsToValidate = fieldNode.querySelectorAll(SELECTOR_INPUTS_TO_VALIDATE);
    var groupCollapseNode = targetContainer.closest('.ibexa-collapse--field-definitions-group');
    var fieldsGroupId = groupCollapseNode.dataset.fieldsGroupId;
    fieldInputsToValidate.forEach(attachValidateEvents);
    fieldGroupInput.value = fieldsGroupId;
    removeFieldsBtn.forEach(function (removeFieldBtn) {
      removeFieldBtn.addEventListener('click', removeField, false);
    });
    var dropdowns = fieldNode.querySelectorAll('.ibexa-dropdown');
    dropdowns.forEach(function (dropdownContainer) {
      var dropdown = new ibexa.core.Dropdown({
        container: dropdownContainer
      });
      dropdown.init();
    });
    draggableGroups.forEach(function (group) {
      group.reinit();
    });
  };

  var dispatchInsertFieldDefinitionNode = function dispatchInsertFieldDefinitionNode(fieldNode) {
    doc.body.dispatchEvent(new CustomEvent('ibexa-inputs:added'));
    doc.body.dispatchEvent(new CustomEvent('ibexa-drop-field-definition', {
      detail: {
        nodes: [fieldNode]
      }
    }));
  };

  var insertFieldDefinitionNode = function insertFieldDefinitionNode(fieldNode) {
    var fieldDefinitionNode = createFieldDefinitionNode(fieldNode);
    removeDragPlaceholders();
    attachFieldDefinitionNodeEvents(fieldDefinitionNode);
    dispatchInsertFieldDefinitionNode(fieldDefinitionNode);
    return fieldDefinitionNode;
  };

  var generateRequest = function generateRequest(action, bodyData, languageCode) {
    var _endpoints$action = endpoints[action],
        actionName = _endpoints$action.actionName,
        method = _endpoints$action.method,
        contentType = _endpoints$action.contentType;
    var _sectionsNode$dataset = sectionsNode.dataset,
        contentTypeGroupId = _sectionsNode$dataset.contentTypeGroupId,
        contentTypeId = _sectionsNode$dataset.contentTypeId;
    var endpointURL = "/api/ibexa/v2/contenttypegroup/".concat(contentTypeGroupId, "/contenttype/").concat(contentTypeId, "/").concat(actionName);

    if (languageCode) {
      endpointURL += "/".concat(languageCode);
    }

    return new Request(endpointURL, {
      method: method,
      mode: 'same-origin',
      credentials: 'same-origin',
      headers: {
        Accept: 'application/html',
        'Content-Type': contentType,
        'X-Siteaccess': siteaccess,
        'X-CSRF-Token': token
      },
      body: JSON.stringify(bodyData)
    });
  };

  var afterChangeGroup = function afterChangeGroup() {
    var groups = doc.querySelectorAll('.ibexa-collapse--field-definitions-group');
    var itemsAction = doc.querySelectorAll('.ibexa-content-type-edit__add-field-definitions-group .ibexa-popup-menu__item-content');
    groups.forEach(function (group) {
      var groupFieldsDefinitionCount = group.querySelectorAll('.ibexa-collapse--field-definition').length;
      var emptyGroupPlaceholder = group.querySelector('.ibexa-field-definitions-empty-group');
      var anchoredPlaceholder = group.querySelector('.ibexa-field-definitions-placeholder--anchored');
      var removeBtn = group.querySelector('.ibexa-collapse__extra-action-button--remove-field-definitions-group');
      emptyGroupPlaceholder.classList.toggle('ibexa-field-definitions-empty-group--hidden', groupFieldsDefinitionCount !== 0);
      anchoredPlaceholder.classList.toggle('ibexa-field-definitions-placeholder--hidden', groupFieldsDefinitionCount === 0);
      removeBtn.disabled = groupFieldsDefinitionCount > 0;
    });
    itemsAction.forEach(function (itemAction) {
      var relatedCollapseSelector = itemAction.dataset.relatedCollapseSelector;
      var isGroupHidden = doc.querySelector(relatedCollapseSelector).classList.contains('ibexa-collapse--hidden');
      itemAction.classList.toggle('ibexa-popup-menu__item-content--disabled', !isGroupHidden);
    });
    doc.querySelectorAll('.ibexa-collapse--field-definition').forEach(function (fieldDefinition, index) {
      fieldDefinition.querySelector('.ibexa-input--position').value = index;
    });
  };

  var addField = function addField() {
    if (!sourceContainer.classList.contains('ibexa-available-field-types__list')) {
      insertFieldDefinitionNode(currentDraggedItem);
      afterChangeGroup();
      return;
    }

    var languageCode = sectionsNode.dataset.languageCode;
    var itemIdentifier = currentDraggedItem.dataset.itemIdentifier;
    var fieldsGroupId = targetContainer.closest('.ibexa-collapse--field-definitions-group').dataset.fieldsGroupId;
    var bodyData = {
      FieldDefinitionCreate: {
        fieldTypeIdentifier: itemIdentifier,
        fieldGroupIdentifier: fieldsGroupId
      }
    };

    if (draggedItemPosition !== -1) {
      bodyData.FieldDefinitionCreate.position = draggedItemPosition;
    }

    fetch(generateRequest('add', bodyData, languageCode)).then(ibexa.helpers.request.getTextFromResponse).then(function (response) {
      insertFieldDefinitionNode(response);
      afterChangeGroup();
    })["catch"](ibexa.helpers.notification.showErrorNotification);
  };

  var reorderFields = function reorderFields() {
    createFieldDefinitionNode(currentDraggedItem);
    removeDragPlaceholders();

    var fieldsOrder = _toConsumableArray(doc.querySelectorAll('.ibexa-collapse--field-definition')).map(function (fieldDefinition) {
      return fieldDefinition.dataset.fieldDefinitionIdentifier;
    });

    var bodyData = {
      FieldDefinitionReorder: {
        fieldDefinitionIdentifiers: fieldsOrder
      }
    };
    var request = generateRequest('reorder', bodyData);
    fetch(request).then(ibexa.helpers.request.getTextFromResponse).then(function () {
      return afterChangeGroup();
    })["catch"](ibexa.helpers.notification.showErrorNotification);
  };

  var removeFieldsGroup = function removeFieldsGroup(event) {
    if (event.currentTarget.hasAttribute('disabled')) {
      return;
    }

    var collapseNode = event.currentTarget.closest('.ibexa-collapse');

    var fieldsToDelete = _toConsumableArray(collapseNode.querySelectorAll('.ibexa-collapse--field-definition')).map(function (fieldDefinition) {
      return fieldDefinition.dataset.fieldDefinitionIdentifier;
    });

    var bodyData = {
      FieldDefinitionDelete: {
        fieldDefinitionIdentifiers: fieldsToDelete
      }
    };
    fetch(generateRequest('remove', bodyData)).then(ibexa.helpers.request.getTextFromResponse).then(function () {
      collapseNode.classList.add('ibexa-collapse--hidden');
      collapseNode.querySelectorAll('.ibexa-collapse--field-definition').forEach(function (fieldDefinition) {
        fieldDefinition.remove();
      });
      afterChangeGroup();
    })["catch"](ibexa.helpers.notification.showErrorNotification);
  };

  var removeField = function removeField(event) {
    var collapseNode = event.currentTarget.closest('.ibexa-collapse');
    var itemToDeleteIdentifiers = collapseNode.dataset.fieldDefinitionIdentifier;
    var bodyData = {
      FieldDefinitionDelete: {
        fieldDefinitionIdentifiers: [itemToDeleteIdentifiers]
      }
    };
    fetch(generateRequest('remove', bodyData)).then(ibexa.helpers.request.getTextFromResponse).then(function () {
      collapseNode.remove();
      afterChangeGroup();
    })["catch"](ibexa.helpers.notification.showErrorNotification);
  };

  var validateInput = function validateInput(input) {
    var isInputEmpty = !input.value;
    var field = input.closest('.form-group');
    var labelNode = field.querySelector('.ibexa-label');
    var errorNode = field.querySelector('.ibexa-form-error');
    input.classList.toggle('is-invalid', isInputEmpty);

    if (errorNode) {
      var fieldName = labelNode.innerHTML;
      var errorMessage = ibexa.errors.emptyField.replace('{fieldName}', fieldName);
      errorNode.innerHTML = isInputEmpty ? errorMessage : '';
    }

    isEditFormValid = isEditFormValid && !isInputEmpty;
  };

  var validateForm = function validateForm() {
    var fieldDefinitionsStatuses = {};
    isEditFormValid = true;
    inputsToValidate = editForm.querySelectorAll(SELECTOR_INPUTS_TO_VALIDATE);
    inputsToValidate.forEach(function (input) {
      var fieldDefinition = input.closest('.ibexa-collapse--field-definition');

      if (fieldDefinition) {
        var fieldDefinitionIdentifier = fieldDefinition.dataset.fieldDefinitionIdentifier;
        var isInputEmpty = !input.value;

        if (!fieldDefinitionsStatuses[fieldDefinitionIdentifier]) {
          fieldDefinitionsStatuses[fieldDefinitionIdentifier] = [];
        }

        fieldDefinitionsStatuses[fieldDefinitionIdentifier].push(isInputEmpty);
      }

      validateInput(input);
    });
    Object.entries(fieldDefinitionsStatuses).forEach(function (_ref) {
      var _ref2 = _slicedToArray(_ref, 2),
          fieldDefinitionIdentifier = _ref2[0],
          inputsStatus = _ref2[1];

      var isFieldDefinitionValid = inputsStatus.every(function (hasError) {
        return !hasError;
      });
      var fieldDefinitionNode = doc.querySelector("[data-field-definition-identifier=\"".concat(fieldDefinitionIdentifier, "\"]"));
      fieldDefinitionNode.classList.toggle('is-invalid', !isFieldDefinitionValid);
    });
  };

  var attachValidateEvents = function attachValidateEvents(input) {
    input.addEventListener('change', validateForm, false);
    input.addEventListener('blur', validateForm, false);
    input.addEventListener('input', validateForm, false);
  };

  var scrollToInvalidInput = function scrollToInvalidInput() {
    var firstInvalidInput = editForm.querySelector('.ibexa-input.is-invalid');
    var fieldDefinition = firstInvalidInput.closest('.ibexa-collapse--field-definition');
    var scrollToNode = fieldDefinition !== null && fieldDefinition !== void 0 ? fieldDefinition : firstInvalidInput;
    scrollToNode.scrollIntoView({
      behavior: 'smooth'
    });
  };

  var FieldDefinitionDraggable = /*#__PURE__*/function (_ibexa$core$Draggable) {
    "use strict";

    _inherits(FieldDefinitionDraggable, _ibexa$core$Draggable);

    var _super = _createSuper(FieldDefinitionDraggable);

    function FieldDefinitionDraggable() {
      _classCallCheck(this, FieldDefinitionDraggable);

      return _super.apply(this, arguments);
    }

    _createClass(FieldDefinitionDraggable, [{
      key: "onDrop",
      value: function onDrop(event) {
        targetContainer = event.currentTarget;
        var dragContainerItems = targetContainer.querySelectorAll('.ibexa-collapse--field-definition, .ibexa-field-definitions-placeholder:not(.ibexa-field-definitions-placeholder--anchored)');
        var currentActiveGroup = doc.querySelector('.ibexa-collapse--field-definitions-group.ibexa-collapse--active-field-definitions-group');
        var targetContainerGroup = targetContainer.closest('.ibexa-collapse--field-definitions-group');
        draggedItemPosition = _toConsumableArray(dragContainerItems).findIndex(function (item, index, array) {
          return item.classList.contains('ibexa-field-definitions-placeholder') && index < array.length - 1;
        });

        if (sourceContainer.isEqualNode(targetContainer)) {
          reorderFields();
        } else {
          addField();
        }

        currentActiveGroup === null || currentActiveGroup === void 0 ? void 0 : currentActiveGroup.classList.remove('ibexa-collapse--active-field-definitions-group');
        targetContainerGroup.classList.add('ibexa-collapse--active-field-definitions-group');
        removeDragPlaceholders();
      }
    }, {
      key: "onDragStart",
      value: function onDragStart(event) {
        _get(_getPrototypeOf(FieldDefinitionDraggable.prototype), "onDragStart", this).call(this, event);

        currentDraggedItem = event.currentTarget;
        sourceContainer = currentDraggedItem.parentNode;
      }
    }, {
      key: "onDragEnd",
      value: function onDragEnd() {
        currentDraggedItem.style.removeProperty('display');
      }
    }]);

    return FieldDefinitionDraggable;
  }(ibexa.core.Draggable);

  filterFieldInput.addEventListener('keyup', searchField, false);
  filterFieldInput.addEventListener('input', searchField, false);
  var firstFieldDefinitionsGroupContent = doc.querySelector('.ibexa-content-type-edit__section .ibexa-field-definitions-group-content');

  if (firstFieldDefinitionsGroupContent) {
    firstFieldDefinitionsGroupContent.classList.add('ibexa-collapse--active-field-definitions-group');
  }

  doc.querySelectorAll('.ibexa-collapse__extra-action-button--remove-field-definitions').forEach(function (removeFieldDefinitionsButton) {
    removeFieldDefinitionsButton.addEventListener('click', removeField, false);
  });
  doc.querySelectorAll('.ibexa-collapse__extra-action-button--remove-field-definitions-group').forEach(function (removeFieldDefinitionsGroupButton) {
    var groupFieldsDefinitionCount = removeFieldDefinitionsGroupButton.closest('.ibexa-collapse--field-definitions-group').querySelectorAll('.ibexa-collapse--field-definition').length;
    removeFieldDefinitionsGroupButton.toggleAttribute('disabled', groupFieldsDefinitionCount > 0);
    removeFieldDefinitionsGroupButton.addEventListener('click', removeFieldsGroup, false);
  });
  doc.querySelectorAll('.ibexa-available-field-types__list .ibexa-available-field-type').forEach(function (availableField) {
    availableField.addEventListener('dragstart', function (event) {
      currentDraggedItem = event.currentTarget;
      sourceContainer = currentDraggedItem.parentNode;
      currentDraggedItem.classList.add('ibexa-available-field-type--is-dragging-out');
    }, false);
    availableField.addEventListener('dragend', function () {
      currentDraggedItem.classList.remove('ibexa-available-field-type--is-dragging-out');
    }, false);
    availableField.addEventListener('click', function (event) {
      var activeTargetContainer = doc.querySelector('.ibexa-collapse--field-definitions-group.ibexa-collapse--active-field-definitions-group .ibexa-content-type-edit__field-definition-drop-zone');

      if (!activeTargetContainer) {
        return;
      }

      currentDraggedItem = event.currentTarget;
      sourceContainer = currentDraggedItem.parentNode;
      draggedItemPosition = -1;
      targetContainer = activeTargetContainer;
      addField();
    }, false);
  });
  doc.querySelectorAll('.ibexa-content-type-edit__field-definition-drop-zone').forEach(function (collapseCotentNode) {
    var draggable = new FieldDefinitionDraggable({
      itemsContainer: collapseCotentNode,
      selectorItem: '.ibexa-collapse--field-definition',
      selectorPlaceholder: '.ibexa-field-definitions-placeholder',
      selectorPreventDrag: '.ibexa-collapse__body'
    });
    draggable.init();
    draggableGroups.push(draggable);
  });
  inputsToValidate.forEach(attachValidateEvents);
  editForm.addEventListener('submit', function (event) {
    var fieldDefinitionsCount = doc.querySelectorAll('.ibexa-collapse--field-definition').length;
    validateForm();

    if (!fieldDefinitionsCount) {
      isEditFormValid = false;
      ibexa.helpers.notification.showErrorNotification(noFieldsAddedError);
    }

    if (!isEditFormValid) {
      event.preventDefault();
      scrollToInvalidInput();
      return;
    }
  }, false);
})(window, window.document, window.ibexa, window.Routing, window.Translator);

/***/ }),

/***/ "./vendor/ibexa/admin-ui/src/bundle/Resources/public/js/scripts/admin.contenttype.selection.js":
/*!*****************************************************************************************************!*\
  !*** ./vendor/ibexa/admin-ui/src/bundle/Resources/public/js/scripts/admin.contenttype.selection.js ***!
  \*****************************************************************************************************/
/***/ (() => {

(function (global, doc) {
  var SELECTOR_TEMPLATE = '.ezselection-settings-option-value-prototype';
  var SELECTOR_OPTION = '.ezselection-settings-option-value';
  var SELECTOR_OPTIONS_LIST = '.ezselection-settings-option-list';
  var SELECTOR_BTN_REMOVE = '.ezselection-settings-option-remove';
  var SELECTOR_BTN_ADD = '.ezselection-settings-option-add';
  var NUMBER_PLACEHOLDER = /__number__/g;

  var initField = function initField(container) {
    var findCheckedOptions = function findCheckedOptions() {
      return container.querySelectorAll('.ezselection-settings-option-checkbox:checked');
    };

    var toggleDisableState = function toggleDisableState() {
      var disabledState = !!findCheckedOptions().length;
      var methodName = disabledState ? 'removeAttribute' : 'setAttribute';
      container.querySelector(SELECTOR_BTN_REMOVE)[methodName]('disabled', disabledState);
    };

    var addOption = function addOption() {
      var template = container.querySelector(SELECTOR_TEMPLATE).innerHTML;
      var optionsList = container.querySelector(SELECTOR_OPTIONS_LIST);
      var nextId = parseInt(optionsList.dataset.nextOptionId, 10);
      optionsList.dataset.nextOptionId = nextId + 1;
      optionsList.insertAdjacentHTML('beforeend', template.replace(NUMBER_PLACEHOLDER, nextId));
    };

    var removeOptions = function removeOptions() {
      findCheckedOptions().forEach(function (element) {
        return element.closest(SELECTOR_OPTION).remove();
      });
      toggleDisableState();
    };

    container.querySelector(SELECTOR_OPTIONS_LIST).addEventListener('click', toggleDisableState, false);
    container.querySelector(SELECTOR_BTN_ADD).addEventListener('click', addOption, false);
    container.querySelector(SELECTOR_BTN_REMOVE).addEventListener('click', removeOptions, false);
  };

  doc.querySelectorAll('.ezselection-settings.options').forEach(initField);
  doc.body.addEventListener('ibexa-drop-field-definition', function (event) {
    var nodes = event.detail.nodes;
    nodes.forEach(function (node) {
      var isSelectionFieldType = node.querySelector(SELECTOR_OPTIONS_LIST);

      if (isSelectionFieldType) {
        initField(node);
      }
    });
  }, false);
})(window, window.document);

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./vendor/ibexa/admin-ui/src/bundle/Resources/public/js/scripts/admin.contenttype.selection.js"), __webpack_exec__("./vendor/ibexa/admin-ui/src/bundle/Resources/public/js/scripts/admin.card.toggle.group.js"), __webpack_exec__("./vendor/ibexa/admin-ui/src/bundle/Resources/public/js/scripts/admin.contenttype.edit.js"));
/******/ }
]);