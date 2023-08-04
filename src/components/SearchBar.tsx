interface SearchBarType {
  totalRepos : string | undefined;
  value : string;
  onChangeText: (e:string) => void
}

export function SearchBar({totalRepos,value,onChangeText}:SearchBarType) {
  return (
    <div>
      <div className="flex items-center w-full justify-between mb-3 mt-20">
        <p className="text-lg font-bold text-base-subtitle">Publications</p>
        <span className="text-sm text-base-span" >{ totalRepos }{" "} publications</span>
      </div>
      <input 
        value={value}
        onChange={ e => onChangeText(e.target.value)}
        type="text" 
        placeholder="search for spefic publication"
        className="w-full bg-base-input border-solid border-base-border px-3 py-4 rounded text-base-title placeholder:text-base-label" 
      />
    </div>
  )
}