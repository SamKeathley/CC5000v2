const weapons = [
    {
        id: 1,
        category: "Weapon",
        name: "Club"
    },
    {
        id: 2,
        category: "Weapon",
        name: "Dagger"
    },
    {
        id: 3,
        category: "Weapon",
        name: "Greatclub"
    },
    {
        id: 4,
        category: "Weapon",
        name: "Handaxe"
    },
    {
        id: 5,
        category: "Weapon",
        name: "Javelin"
    },
    {
        id: 6,
        category: "Weapon",
        name: "Light Hammer"
    },
    {
        id: 7,
        category: "Weapon",
        name: "Mace"
    },
    {
        id: 8,
        category: "Weapon",
        name: "Quarterstaff"
    },
    {
        id: 9,
        category: "Weapon",
        name: "Sickle"
    },
    {
        id: 10,
        category: "Weapon",
        name: "Spear"
    },
    {
        id: 11,
        category: "Weapon",
        name: "Crossbow"
    },
    {
        id: 12,
        category: "Weapon",
        name: "Dart"
    },
    {
        id: 13,
        category: "Weapon",
        name: "Shortbow"
    },
    {
        id: 14,
        category: "Weapon",
        name: "Sling"
    },
    {
        id: 15,
        category: "Weapon",
        name: "Battleaxe"
    },
    {
        id: 16,
        category: "Weapon",
        name: "Flail"
    },
    {
        id: 17,
        category: "Weapon",
        name: "Glaive"
    },
    {
        id: 18,
        category: "Weapon",
        name: "Greataxe"
    },
    {
        id: 19,
        category: "Weapon",
        name: "Greatsword"
    },
    {
        id: 20,
        category: "Weapon",
        name: "Halberd"
    },
    {
        id: 21,
        category: "Weapon",
        name: "Lance"
    },
    {
        id: 22,
        category: "Weapon",
        name: "Longsword"
    },
    {
        id: 23,
        category: "Weapon",
        name: "Maul"
    },
    {
        id: 24,
        category: "Weapon",
        name: "Morningstar"
    },
    {
        id: 25,
        category: "Weapon",
        name: "Pike"
    },
    {
        id: 26,
        category: "Weapon",
        name: "Rapier"
    },
    {
        id: 27,
        category: "Weapon",
        name: "Scimitar"
    },
    {
        id: 28,
        category: "Weapon",
        name: "Shortsword"
    },
    {
        id: 29,
        category: "Weapon",
        name: "Trident"
    },
    {
        id: 30,
        category: "Weapon",
        name: "War Pick"
    },
    {
        id: 31,
        category: "Weapon",
        name: "Warhammer"
    },
    {
        id: 32,
        category: "Weapon",
        name: "Whip"
    },
    {
        id: 33,
        category: "Weapon",
        name: "Blowgun"
    },
    {
        id: 34,
        category: "Weapon",
        name: "Longbow"
    },
    {
        id: 35,
        category: "Weapon",
        name: "Net"
    }
]

const equipment = [
    {
        id: 1,
        category: "Equipment",
        name: "Abacus"
    },
    {
        id: 2,
        category: "Equipment",
        name: "Vial of Acid"
    },
    {
        id: 3,
        category: "Equipment",
        name: "Flask of Alchemist's Fire"
    },
    {
        id: 4,
        category: "Equipment",
        name: "Ammunition (arrows, blowgun needles, crossbow bolts, bullets, etc.)"
    },
    {
        id: 5,
        category: "Equipment",
        name: "Vial of Antitoxin / Antidote"
    },
    {
        id: 6,
        category: "Equipment",
        name: "Arcane Focus"
    },
    {
        id: 7,
        category: "Equipment",
        name: "Backpack"
    },
    {
        id: 8,
        category: "Equipment",
        name: "Bag of Ball Bearings"
    },
    {
        id: 9,
        category: "Equipment",
        name: "Barrel"
    },
    {
        id: 10,
        category: "Equipment",
        name: "Basket"
    },
    {
        id: 11,
        category: "Equipment",
        name: "Bedroll"
    },
    {
        id: 12,
        category: "Equipment",
        name: "Bedroll"
    },
    {
        id: 13,
        category: "Equipment",
        name: "Blanket"
    },
    {
        id: 14,
        category: "Equipment",
        name: "Book"
    },
    {
        id: 15,
        category: "Equipment",
        name: "Glass Bottle"
    },
    {
        id: 16,
        category: "Equipment",
        name: "Bucket"
    },
    {
        id: 17,
        category: "Equipment",
        name: "Candle"
    },
    {
        id: 18,
        category: "Equipment",
        name: "Map / Scroll Case"
    },
    {
        id: 19,
        category: "Equipment",
        name: "Chain"
    },
    {
        id: 20,
        category: "Equipment",
        name: "Chest"
    },
    {
        id: 21,
        category: "Equipment",
        name: "Component Pouch"
    },
    {
        id: 22,
        category: "Equipment",
        name: "Crowbar"
    },
    {
        id: 23,
        category: "Equipment",
        name: "Druidic Focus"
    },
    {
        id: 24,
        category: "Equipment",
        name: "Flask / Tankard"
    },
    {
        id: 25,
        category: "Equipment",
        name: "Grappling Hook"
    },
    {
        id: 26,
        category: "Equipment",
        name: "Hammer"
    },
    {
        id: 27,
        category: "Equipment",
        name: ""
    },
    {
        id: 28,
        category: "Equipment",
        name: "Hourglass"
    },
    {
        id: 29,
        category: "Equipment",
        name: "Hunting Trap"
    },
    {
        id: 30,
        category: "Equipment",
        name: "Bottle of Ink"
    },
    {
        id: 31,
        category: "Equipment",
        name: "Ink Pen"
    },
    {
        id: 32,
        category: "Equipment",
        name: "Ladder"
    },
    {
        id: 33,
        category: "Equipment",
        name: "Lantern"
    },
    {
        id: 34,
        category: "Equipment",
        name: "Lamp"
    },
    {
        id: 35,
        category: "Equipment",
        name: "Lock and Key"
    },
    {
        id: 36,
        category: "Equipment",
        name: "Magnifying Glass"
    },
    {
        id: 37,
        category: "Equipment",
        name: "Mirror"
    },
    {
        id: 38,
        category: "Equipment",
        name: "Flask of Oil"
    },
    {
        id: 39,
        category: "Equipment",
        name: "Parchment"
    },
    {
        id: 40,
        category: "Equipment",
        name: "Perfume Bottle"
    },
    {
        id: 41,
        category: "Equipment",
        name: "Potions"
    },
    {
        id: 42,
        category: "Equipment",
        name: "Vial of Poison"
    },
    {
        id: 43,
        category: "Equipment",
        name: "Pouch"
    },
    {
        id: 44,
        category: "Equipment",
        name: "Scrying Bones"
    },
    {
        id: 45,
        category: "Equipment",
        name: "Rope"
    },
    {
        id: 46,
        category: "Equipment",
        name: "Merchant's Scale"
    },
    {
        id: 47,
        category: "Equipment",
        name: "Shovel"
    },
    {
        id: 48,
        category: "Equipment",
        name: "Signet Ring"
    },
    {
        id: 49,
        category: "Equipment",
        name: "Spellbook"
    },
    {
        id: 50,
        category: "Equipment",
        name: "Tea Kettle"
    },
    {
        id: 51,
        category: "Equipment",
        name: "Umbrella"
    },
    {
        id: 52,
        category: "Equipment",
        name: "Needle and Thread"
    }
]

const tools = [
    {
        id: 1,
        category: "Tools and Kits",
        name: "Alchemist's Supplies"
    },
    {
        id: 2,
        category: "Tools and Kits",
        name: "Brewer's Supplies"
    },
    {
        id: 3,
        category: "Tools and Kits",
        name: "Calligrapher's Tools"
    },
    {
        id: 4,
        category: "Tools and Kits",
        name: "Cartographer's Tools"
    },
    {
        id: 5,
        category: "Tools and Kits",
        name: "Clockmaker's Kit"
    },
    {
        id: 6,
        category: "Tools and Kits",
        name: "Cobbler's Tools"
    },
    {
        id: 7,
        category: "Tools and Kits",
        name: "Cook's Utensils"
    },
    {
        id: 8,
        category: "Tools and Kits",
        name: "Glassblower's Tools"
    },
    {
        id: 9,
        category: "Tools and Kits",
        name: "Jeweler's Tools"
    },
    {
        id: 10,
        category: "Tools and Kits",
        name: "Leatherworker's Tools"
    },
    {
        id: 11,
        category: "Tools and Kits",
        name: "Mason's Tools"
    },
    {
        id: 12,
        category: "Tools and Kits",
        name: "Painter's Tools"
    },
    {
        id: 13,
        category: "Tools and Kits",
        name: "Smithing Tools"
    },
    {
        id: 14,
        category: "Tools and Kits",
        name: "Tinker's Tools"
    },
    {
        id: 15,
        category: "Tools and Kits",
        name: "Weaver's Tools"
    },
    {
        id: 16,
        category: "Tools and Kits",
        name: "Woodcarver's Tools"
    },
    {
        id: 17,
        category: "Tools and Kits",
        name: "Disguise Kit"
    },
    {
        id: 18,
        category: "Tools and Kits",
        name: "Forgery Kit"
    },
    {
        id: 19,
        category: "Tools and Kits",
        name: "Herbalism Kit"
    },
    {
        id: 20,
        category: "Tools and Kits",
        name: "Musical Instrument"
    },
    {
        id: 21,
        category: "Tools and Kits",
        name: "Navigator's Tools"
    },
    {
        id: 22,
        category: "Tools and Kits",
        name: "Poisoner's Kit"
    },
    {
        id: 23,
        category: "Tools and Kits",
        name: "Thieves' Tools"
    },
    {
        id: 24,
        category: "Tools and Kits",
        name: "Healer's Kit"
    }
]

export { weapons, equipment, tools };


