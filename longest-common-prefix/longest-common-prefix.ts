export function longestCommonPrefix(strs: string[]): string {
    if (strs.length == 1) return strs[0]
    let prefix = "";
    const strs_sorted= strs.sort((a,b) => a.length - b.length);
    const first_item = strs_sorted[0]
    
    for(let i = 0; i < first_item.length; i++) {
        let letter = first_item[i];
        for(let j = 1; j < strs_sorted.length; j++) {
            let item = strs_sorted[j]
            if (item[i] !== letter) return prefix;
        }
        prefix += letter;
    }
    
    return prefix;
};