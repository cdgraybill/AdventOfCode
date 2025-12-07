package day2

import (
	"aoc2025/common"
	"strconv"
	"strings"
)

func PartOne() {
	ranges := common.SplitInputByDelimiter("day2/day2input.txt", ",")

	answer := 0

	for i := range ranges {
		nums := strings.Split(ranges[i], "-")
		firstNum, _ := strconv.Atoi(strings.TrimSpace(nums[0]))
		secondNum, _ := strconv.Atoi(strings.TrimSpace(nums[1]))

		for j := firstNum; j <= secondNum; j++ {
			num := strconv.Itoa(j)

			if len(num)%2 != 0 {
				continue
			} else {
				if num[0:len(num)/2] == num[len(num)/2:len(num)] {
					answer += j
				}
			}
		}
	}

	println(answer)
}
