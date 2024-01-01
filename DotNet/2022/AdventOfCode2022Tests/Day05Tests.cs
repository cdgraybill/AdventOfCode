using AdventOfCode2022.Solvers;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace AdventOfCode2022Tests
{
    public class Day05Tests
    {
        [Test]
        public void PartOne_Solve()
        {
            var solver = new Day05Solver();
            var answer = solver.SolvePartOne(solver.Moves, solver.Crates);
            
            Assert.That(answer, Is.EqualTo("JRVNHHCSJ"));
        }

        [Test]
        public void PartTwo_Solve()
        {
            var solver = new Day05Solver();
            var answer = solver.SolvePartTwo(solver.Moves, solver.Crates);

            Assert.That(answer, Is.EqualTo("GNFBSBJLH"));
        }

        [Test]
        public void GetStackInstructions_Success()
        {
            var solver = new Day05Solver();
            var stackInstructions = solver.GetMoveSet(solver.SampleMoves[0]);

            Assert.That(stackInstructions.NumberOfCrates, Is.EqualTo(1));
            Assert.That(stackInstructions.StartingStack, Is.EqualTo(2));
            Assert.That(stackInstructions.EndingStack, Is.EqualTo(1));
        }
    }
}
