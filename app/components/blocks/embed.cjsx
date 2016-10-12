
React = require('react')
ReactDOM = require('react-dom')

{
  Entity,
  RichUtils
  AtomicBlockUtils
  EditorBlock
} = require('draft-js')

utils = require("../../utils/utils")


class EmbedBlock extends React.Component
  constructor: (props) ->
    super props
    api_key = "86c28a410a104c8bb58848733c82f840"
    @state = 
      embed_data: {}

  componentDidMount: =>
    return unless @.props.blockProps.data
    utils.ajax
      url: "#{@.props.blockProps.data.embed_url}#{@.props.blockProps.data.provisory_text}&scheme=https"
      (data)=>
        if data.status is 200
          @setState
            embed_data: JSON.parse(data.responseText)    

  classForImage: ->
    if @state.embed_data.thumbnail_url then "" else "mixtapeImage--empty u-ignoreBlock"

  render: ->
    #block = @.props;
    #foo = @.props.blockProps;
    #data = Entity.get(block.block.getEntityAt(0)).getData();
    return(
      <span>
        <a target='_blank'
          className="js-mixtapeImage mixtapeImage #{@classForImage()}"
          href={@state.embed_data.url} 
          style={{backgroundImage: "url('#{@state.embed_data.thumbnail_url}')"}}>
        </a>
        <a className='markup--anchor markup--mixtapeEmbed-anchor' 
          target='_blank' href={@state.embed_data.url}>
          <strong className='markup--strong markup--mixtapeEmbed-strong'>
            {@state.embed_data.title}
          </strong>
          <em className='markup--em markup--mixtapeEmbed-em'>
            {@state.embed_data.description}
          </em>
        </a>
        {@state.embed_data.provider_url}
      </span>
    )

module.exports = EmbedBlock