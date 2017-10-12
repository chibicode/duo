---
title: "Syntax Highlighting Test Case"
# https://github.com/jneen/rouge/blob/e5b0446eac953cbd2d40e1f93527642b3d066d31/lib/rouge.rb#L6-L34

# To set og:image:
# image: ...
---

```ruby
# stdlib
require 'pathname'

# The containing module for Rouge
module Rouge
  class << self
    def reload!
      Object.send :remove_const, :Rouge
      load __FILE__
    end

    # Highlight some text with a given lexer and formatter.
    #
    # @example
    #   Rouge.highlight('@foo = 1', 'ruby', 'html')
    #   Rouge.highlight('var foo = 1;', 'js', 'terminal256')
    #
    #   # streaming - chunks become available as they are lexed
    #   Rouge.highlight(large_string, 'ruby', 'html') do |chunk|
    #     $stdout.print chunk
    #   end
    def highlight(text, lexer, formatter, &b)
      lexer = Lexer.find(lexer) unless lexer.respond_to? :lex
      raise "unknown lexer #{lexer}" unless lexer

      formatter = Formatter.find(formatter) unless formatter.respond_to? :format
      raise "unknown formatter #{formatter}" unless formatter

      formatter.format(lexer.lex(text), &b)
    end
  end
end
```
