import {putMessage,intersect,has_mcc,has_cc,SS_VALID} from '../Base.js';

export var MDCC_DRG=class{

    CB19_group(record){
        return true;
    };

    CB29_group(record){
        return true;
    };

    CB39_group(record){
        return true;
    };

    CB49_group(record){
        return true;
    };

    CC19_group(record){
        return true;
    };

    CD19_group(record){
        return true;
    };

    CD29_group(record){
        return true;
    };

    CJ19_group(record){
        return true;
    };

    CS19_group(record){
        return true;
    };

    CU19_group(record){
        return true;
    };

    CW19_group(record){
        return true;
    };

    CX19_group(record){
        return true;
    };

    CR11_group(record){
        return record.zdList.length>1 && has_mcc(record.zdList[0],record.zdList.slice(1));
    };

    CT11_group(record){
        return record.zdList.length>1 && has_mcc(record.zdList[0],record.zdList.slice(1));
    };

    CV11_group(record){
        return record.zdList.length>1 && has_mcc(record.zdList[0],record.zdList.slice(1));
    };

    CZ11_group(record){
        return record.zdList.length>1 && has_mcc(record.zdList[0],record.zdList.slice(1));
    };

    CR13_group(record){
        return record.zdList.length>1 && (has_mcc(record.zdList[0],record.zdList.slice(1)) || has_cc(record.zdList[0],record.zdList.slice(1)));
    };

    CT13_group(record){
        return record.zdList.length>1 && (has_mcc(record.zdList[0],record.zdList.slice(1)) || has_cc(record.zdList[0],record.zdList.slice(1)));
    };

    CV13_group(record){
        return record.zdList.length>1 && (has_mcc(record.zdList[0],record.zdList.slice(1)) || has_cc(record.zdList[0],record.zdList.slice(1)));
    };

    CZ13_group(record){
        return record.zdList.length>1 && (has_mcc(record.zdList[0],record.zdList.slice(1)) || has_cc(record.zdList[0],record.zdList.slice(1)));
    };

    CR15_group(record){
        return true;
    };

    CT15_group(record){
        return true;
    };

    CV15_group(record){
        return true;
    };

    CZ15_group(record){
        return true;
    };

}
