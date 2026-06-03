class << File
  alias exists? exist? unless respond_to?(:exists?)
end

require "bibtex"

module BibTeX
  class Bibliography
    def each(&block)
      return enum_for(:each) unless block

      @data.each(&block)
    end
  end

  class Entry
    def each(&block)
      return to_enum unless block

      fields.each(&block)
      self
    end

    alias each_pair each
  end

  class Names
    def each(&block)
      names = @tokens.select { |token| token.respond_to?(:each_pair) }
      return names.each unless block

      names.each(&block)
    end

    def value(options = {})
      @tokens.map { |token| token.is_a?(::String) ? token : token.to_s(options) }.join(" and ")
    end

    def to_s(options = {})
      return value(options) unless options.key?(:quotes)

      quotes = [options[:quotes]].flatten
      [quotes[0], value(options), quotes[-1]].compact.join
    end

    def convert!(*filters)
      @tokens.each { |token| token.convert!(*filters) if token.respond_to?(:convert!) }
      self
    end
  end
end
