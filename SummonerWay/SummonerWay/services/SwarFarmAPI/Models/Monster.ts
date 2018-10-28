export namespace MonsterModels {
    export interface Source {
        Id: number;
        Url: string;
        Name: string;
        Description: string;
        Farmable_source: boolean;
    }

    export interface Monster {
        Id: number;
        Url: string;
        Com2us_id: number;
        Family_id: number;
        Name: string;
        Image_filename: string;
        Element: string;
        Archetype: string;
        Base_stars: number;
        Obtainable: boolean;
        Can_awaken: boolean;
        Is_awakened: boolean;
        Awaken_bonus: string;
        Skills: number[];
        Skill_ups_to_max: number;
        Leader_skill?: any;
        Homunculus_skills: number[];
        Base_hp: number;
        Base_attack: number;
        Base_defense: number;
        Speed: number;
        Crit_rate: number;
        Crit_damage: number;
        Resistance: number;
        Accuracy: number;
        Raw_hp: number;
        Raw_attack: number;
        Raw_defense: number;
        Max_lvl_hp: number;
        Max_lvl_attack: number;
        Max_lvl_defense: number;
        Awakens_from?: any;
        Awakens_to?: any;
        Awaken_mats_fire_low: number;
        Awaken_mats_fire_mid: number;
        Awaken_mats_fire_high: number;
        Awaken_mats_water_low: number;
        Awaken_mats_water_mid: number;
        Awaken_mats_water_high: number;
        Awaken_mats_wind_low: number;
        Awaken_mats_wind_mid: number;
        Awaken_mats_wind_high: number;
        Awaken_mats_light_low: number;
        Awaken_mats_light_mid: number;
        Awaken_mats_light_high: number;
        Awaken_mats_dark_low: number;
        Awaken_mats_dark_mid: number;
        Awaken_mats_dark_high: number;
        Awaken_mats_magic_low: number;
        Awaken_mats_magic_mid: number;
        Awaken_mats_magic_high: number;
        Source: Source[];
        Fusion_food: boolean;
        Resources: Array<any>;
        Homunculus: boolean;
        Craft_cost?: any;
        Craft_materials: any[];
    }

    export interface ListOfMonsters {
        Count: number;
        Next: string;
        Previous: string;
        Results: Array<Monster>;
    }
}
