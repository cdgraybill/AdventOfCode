package day2

import (
	"aoc2025/common"
	"fmt"
	"strconv"
	"strings"
)

func PartTwo() {
	ranges := common.SplitInputByDelimiter("day2/day2sample.txt", ",")

	answer := 0

	for i := range ranges {
		nums := strings.Split(ranges[i], "-")
		firstNum, _ := strconv.Atoi(strings.TrimSpace(nums[0]))
		secondNum, _ := strconv.Atoi(strings.TrimSpace(nums[1]))

		for j := firstNum; j <= secondNum; j++ {
			num := strconv.Itoa(j)
			isPartOneInvalidNum := len(num)%2 == 0 && num[0:len(num)/2] == num[len(num)/2:len(num)]

			// go ahead and include
			if isPartOneInvalidNum || strings.Count(num, string(num[0])) == len(num) {
				answer += j
			} else {
				str := ""
				for k := range len(num) {
					str += string(num[k])

					fmt.Println(num)
					fmt.Println(strings.Count(num, str)*len(str) == len(num))

					isInvalid := strings.Count(num, str)*len(str) == len(num)

					if isInvalid {
						answer += j
						break
					}
				}
			}
		}
	}

	println(answer)
}
