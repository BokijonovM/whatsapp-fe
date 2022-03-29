import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";

export default function MySearch() {
  return (
    <Autocomplete
      className="autocomplete-text-field"
      disablePortal
      id="combo-box-demo"
      options={messageText}
      sx={{ width: 300 }}
      renderInput={(params) => (
        <TextField
          className="search-names-in2nd-header"
          {...params}
          size="small"
          label="Messages"
        />
      )}
    />
  );
}

// Top 100 films as rated by IMDb users. http://www.imdb.com/chart/top
const messageText = [{ label: "User" }, { label: "Other user" }];
