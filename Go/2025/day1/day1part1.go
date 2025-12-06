package day1

import (
	"aoc2025/common"
	"strconv"
	"strings"
)

func PartOne() {
	lines := common.ParseInput()

	dial := 50
	answer := 0

	for i := range lines {
		dial, answer = turnDialPartOne(dial, answer, lines[i])
	}

	println(answer)
}

func turnDialPartOne(dial int, answer int, instruction string) (int, int) {
	direction := string(instruction[0])
	turns, _ := strconv.Atoi(strings.TrimSpace(instruction[1:]))

	for i := 0; i < turns; i++ {
		if direction == "L" {
			if dial == 0 {
				dial = 99
			} else {
				dial--
			}
		} else {
			if dial == 99 {
				dial = 0
			} else {
				dial++
			}
		}
	}

	if dial == 0 {
		answer++
	}

	return dial, answer
}
