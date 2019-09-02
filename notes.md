

### RULES ###
projects = multiple tasks
task belongs to one project
resource can be used multiple times in projects

Project:
    - must have a name
    - if no value is given should return default of false
    - unique id
    - description

resource:
    - must have a name
    - unique id
    - description
    
task:
    - must have a description
    - must have id of existing project
    - if no value for completed should return false
    - notes
