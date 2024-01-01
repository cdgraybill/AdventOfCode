using AdventOfCode2022.Solvers;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace AdventOfCode2022Tests
{
    public class Day07Tests
    {
        [Test]
        public void GetDirectoryContents_Success()
        {
            var solver = new Day07Solver();
            var directoryContents = solver.GetDirectoryContents(solver.SampleProblemInput);

            Assert.That(directoryContents[0], Is.EqualTo("dir a"));
            Assert.That(directoryContents[1], Is.EqualTo("14848514 b.txt"));
            Assert.That(directoryContents[2], Is.EqualTo("8504156 c.dat"));
            Assert.That(directoryContents[3], Is.EqualTo("dir d"));
        }
    }
}
