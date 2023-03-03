export const input = (type, id, text) => {
  const span = document.createElement("span")
  span.setAttribute("class", "form_elem")

  const input = document.createElement("input")
  input.setAttribute("type", type)
  input.setAttribute("id", id)
  input.setAttribute("placeholder", text)
  span.appendChild(input)

  const label = document.createElement("label");
  label.setAttribute("for", id);
  label.appendChild(document.createTextNode(text));
  span.appendChild(label);

  document.getElementById("grepp_form").appendChild(span)
}

export const select = (id, optValList, optTxtList, text) => {
  const span = document.createElement("span");
  span.setAttribute("class", "form_elem");

  const select = document.createElement("select");
  select.setAttribute("id", id);
  select.setAttribute("name", id);
  span.appendChild(select);

  const label = document.createElement("label");
  label.setAttribute("for", id);
  label.appendChild(document.createTextNode(text));
  span.appendChild(label);

  for(let i = 0; i < optValList.length; i++) {
    const option = document.createElement("option");
    option.setAttribute("value", optValList[i]);
    option.appendChild(document.createTextNode(optTxtList[i]));
    select.appendChild(option);
  }

  document.getElementById("grepp_form").appendChild(span);
}

export const button = (type, text) => {
  const span = document.createElement("span");
  span.setAttribute("class", "form_elem");

  const button = document.createElement("button");
  button.setAttribute("type", type);
  button.appendChild(document.createTextNode(text));

  span.appendChild(button);
  document.getElementById("grepp_form").appendChild(span);
}
