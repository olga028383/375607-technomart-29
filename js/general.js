const replaceLink = function (element, newTag) {
  var elementNew = document.createElement(newTag);
  elementNew.innerHTML = element.innerHTML;

  Array.prototype.forEach.call(element.attributes, function (attr) {
    elementNew.setAttribute(attr.name, attr.value);
  });

  element.parentNode.insertBefore(elementNew, element);
  element.parentNode.removeChild(element);

  elementNew.removeAttribute('href');
  elementNew.setAttribute('type', 'button');

  return elementNew;
};
