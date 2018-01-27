import Activity from "./activity.model";
import parseErrors from '../utils/parseErrors'

const activityController = {
    createActivity: (req, res) => {
        console.log(req.body)
        Activity.create(req.body)
          .then(activity => res.status(200).json({ activity }))
          .catch(err =>
            res
              .status(400)
              .json( {errors: parseErrors(err.errors)} )
          );
        
    },
    findAll: (req, res) => {
        Activity.find({})
            .then(activity => res.status(201).json({activity}))
    }
}

export default activityController;