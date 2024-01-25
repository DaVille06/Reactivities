using Domain;
using MediatR;
using Persistence;

namespace Application.Activities
{
    public class Create
    {
        // doesn't return data
        public class Command : IRequest
        {
            public Activity Activity { get; set; }
        }

        public class Handler : IRequestHandler<Command>
        {
            private readonly DataContext _context;

            public Handler(DataContext context)
            {
                _context = context;
            }

            public async Task Handle(Command request, CancellationToken cancellationToken)
            {
                // adds the activity in memory
                _context.Activities.Add(request.Activity);
                // saves the value to the database!
                await _context.SaveChangesAsync();
            }
        }
    }
}