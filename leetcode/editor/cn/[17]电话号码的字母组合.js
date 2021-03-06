//给定一个仅包含数字 2-9 的字符串，返回所有它能表示的字母组合。答案可以按 任意顺序 返回。
//
// 给出数字到字母的映射如下（与电话按键相同）。注意 1 不对应任何字母。
//
//
//
//
//
// 示例 1：
//
//
//输入：digits = "23"
//输出：["ad","ae","af","bd","be","bf","cd","ce","cf"]
//
//
// 示例 2：
//
//
//输入：digits = ""
//输出：[]
//
//
// 示例 3：
//
//
//输入：digits = "2"
//输出：["a","b","c"]
//
//
//
//
// 提示：
//
//
// 0 <= digits.length <= 4
// digits[i] 是范围 ['2', '9'] 的一个数字。
//
// Related Topics 哈希表 字符串 回溯 👍 1737 👎 0


//leetcode submit region begin(Prohibit modification and deletion)
/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function (digits) {
    const result = []
    if (digits.length === 0) return result;
    const strMap = ['', '', 'abc', 'def', 'ghi', 'jkl', 'mno', 'pqrs', 'tuv', 'wxyz']

    dfs('', digits, result, strMap)
    return result
};


function dfs(path, digits, result, strMap) {
    if (path.length === digits.length) {
        result.push(path)
        return
    }
    let currentCharIndex = parseInt(digits[path.length])
    let currentChar = strMap[currentCharIndex]

    for (let i = 0; i < currentChar.length; i++) {
        path += currentChar[i]
        dfs(path, digits, result, strMap)
        path = path.substring(0, path.length - 1)
    }
}

console.log(letterCombinations('23'))
//leetcode submit region end(Prohibit modification and deletion)
