using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace AdventOfCode2022.Solvers
{
    public class Day07Solver
    {
        public readonly List<string> ProblemInput = File.ReadLines(@"C:ProblemInputs\Day07Input.txt").ToList();
        public readonly List<string> SampleProblemInput = File.ReadLines(@"C:SampleInputs\Day07SampleInput.txt").ToList();

        public List<string> GetDirectoryContents(List<string> problemInput)
        {
            var directoryContents = new List<string>();

            for (int i = 1; i < problemInput.Count; i++)
            {
                if (problemInput[i - 1] == "$ ls" || !problemInput[i].StartsWith('$'))
                    directoryContents.Add(problemInput[i]);
                else
                    break;
            }

            return directoryContents;
        }
    }
}
