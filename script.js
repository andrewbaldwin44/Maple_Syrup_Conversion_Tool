let mapleEntry = document.querySelector("#mapleEntry");
let sugarEntry = document.querySelector("#sugarEntry");

let sugarSelect = document.querySelector("#sugarSelect");
let mapleSelect = document.querySelector("#mapleSelect");

const liquidPar = document.querySelector("#liquid");

function convert(e) {
  let sugarSelectedItem = sugarSelect.options[sugarSelect.selectedIndex].text;
  let mapleSelectedItem = mapleSelect.options[mapleSelect.selectedIndex].text;

  let multiplier = 0;
  if (sugarSelectedItem == mapleSelectedItem) {
    multiplier = 1;
  }
  else if (sugarSelectedItem == "Tablespoons" && mapleSelectedItem == "Cups") {
    multiplier = 1/16;
  }
  else if (sugarSelectedItem == "Cups" && mapleSelectedItem == "Tablespoons") {
    multiplier = 16;
  }

  let liquidAmount = 1;
  if (e.id == "sugarEntry" || e.id == "sugarSelect") {
    mapleEntry.value = 3/4 * sugarEntry.value * multiplier;
    sugarSelect.value == 1
      ? liquidAmount = Math.round(sugarEntry.value *100) / 100
      : liquidAmount = Math.round((sugarEntry.value * 1/16) * 100) / 100
    liquidPar.textContent = `And remove ${liquidAmount == 1
      ? liquidAmount + " tablespoon"
      : liquidAmount + " tablespoons"}
        of liquid`;
  }
  if (e.id == "mapleEntry" || e.id == "mapleSelect") {
    sugarEntry.value = 4/3 * mapleEntry.value / multiplier;
    sugarSelect.value == 1
      ? liquidAmount = Math.round(sugarEntry.value * 100) / 100
      : liquidAmount = Math.round((sugarEntry.value * 1/16) * 100) / 100
    liquidPar.textContent = `And remove ${liquidAmount == 1
      ? liquidAmount + " tablespoon"
      : liquidAmount + " tablespoons"}
        of liquid`;
  }
  sugarEntry.value = Math.round(sugarEntry.value *100) / 100;
  mapleEntry.value = Math.round(mapleEntry.value *100) / 100;
}
