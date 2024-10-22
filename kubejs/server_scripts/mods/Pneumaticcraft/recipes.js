ServerEvents.recipes(allthemods => {

function changeInput(item, replacement){
allthemods.replaceInput(
  { input: 'pneumaticcraft:plastic' },
  item, replacement
)}

allthemods.custom(
  {
    type: "pneumaticcraft:crafting_shaped_pressurizable",
    category: "misc",
    key: {
      C: {
        item: "pneumaticcraft:air_canister"
      },
      G: {
        item: "pneumaticcraft:gps_tool"
      },
      P: {
        tag: "c:plastics"
      }
    },
    pattern: [
      "PPP",
      "PGP",
      "PCP"
    ],
    result: {
      count: 1,
      id: "pneumaticcraft:amadron_tablet"
    }
  }
)

//changeInput('#pneumaticcraft:plastic_sheets', '#c:plastics')
changeInput('pneumaticcraft:plastic', '#c:plastics')
})